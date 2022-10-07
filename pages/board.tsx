import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/dist/client/router';
import { useSession, signOut } from 'next-auth/react';

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
  query getProjects($username: String!){
    user_projects(username: $username) {
      username
    }
  }
`


const Board = () => {
  const { data: session } = useSession();

  const router = useRouter();
  useEffect(() => {
    if (!session) {
      router.push('/login')
      // signOut();
    }
  }, [session])
  // console.log(session)


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
      variables: "tester1"
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

      {/* {projectData.user_projects.map((proj) => {
        return (
          <div key={proj.id}>{proj.title}</div>
        )
      })} */}

    </>
  )
}

export default Board