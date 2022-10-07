import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/dist/client/router';
import { useSession, signOut, getSession } from 'next-auth/react';

import { gql, useQuery } from '@apollo/client';
import AddProjectModal from '../components/modals/AddProjectModal';

const AllUsersQuery = gql`
  query getusers{
      users {
        id
        name
        username
      }
  }
`
const UserProjects = gql`
  query getProjects($creator_username: String!){
    user_projects(creator_username: $creator_username) {
      title
      creator_username
    }
  }
`


const Board = ({ session }) => {


  const { data, loading, error } = useQuery(AllUsersQuery, {
    onCompleted: data => {
      console.log(data)
    }
  });

  const { data: usersData, loading: usersLoading, error: usersError } = useQuery(AllUsersQuery, {
    onCompleted: usersData => {
      console.log(usersData)
    }
  });
  // if (loading) return <div> Loading... </div>
  // if (error) return <div> Oops something went wrong: {error.message}</div>

  const { data: projectData, loading: projectLoading, error: projectError } = useQuery(UserProjects,
    {
      variables: {
        creator_username: session?.user?.name
      }
    }
  )


  return (
    <>
      <AddProjectModal />
      {
        usersData &&
        usersData.users.map((user: any) => {
          return (
            <div key={user.id}>{user.username}</div>
          )
        })}

      {projectData && projectData.user_projects.map((proj) => {
        return (
          <div key={proj.id}>{proj.title}</div>
        )
      })}

    </>
  )
}

export default Board

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  console.log(session)

  if(!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false
      }
    }
  }

  return {
    props: {
      session
    }
  }
}