import { ChangeEvent, useState } from "react"
import { gql, useMutation } from '@apollo/client'
import { useSession } from "next-auth/react";

const CREATE_PROJECT_MUTATION = gql`
  mutation CreateProject($title: String!, $description: String, $website: String, $category: String! $creator_username: String!) {
    create_project(title: $title, description: $description, url: $website, category: $category, creator_username: $creator_username){
      title
      description
      url
      category
      creator_username
    }
  }
`

interface ProjectFormProps {
  closeModal: () => void,
}

export default function CreateProjectForm(prop: ProjectFormProps) {

  const { data: session } = useSession();
  const [title, setTitle] = useState('')
  const [Url, setUrl] = useState('')
  const [desc, setDesc] = useState('')
  const [category, setCategory] = useState('Business')
  const [invalidTitle, setInvalidTitle] = useState(true)


  let handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
    (e.currentTarget.value == '') ? setInvalidTitle(true) : setInvalidTitle(false);
    setTitle(e.currentTarget.value)
  }
  let handleUrl = (e: ChangeEvent<HTMLInputElement>) => {
    setUrl(e.currentTarget.value)
  }
  let handleDesc = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDesc(e.currentTarget.value)
  }
  let handleCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.currentTarget.value)
  }

  let CloseForm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    prop.closeModal();

  }

  const [create_project, { data, loading: createProjectLoading, error }] = useMutation(CREATE_PROJECT_MUTATION, {
    onCompleted(data) {
      setTitle('')
      setDesc('')
      setUrl('')
      prop.closeModal()
    },
  })

  const handleCreateProject = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    console.log("handle createproj")

    if (invalidTitle == false) {
      create_project({
        variables: {
          title: title,
          description: desc,
          url: Url,
          category: category,
          creator_username: session?.user?.name
        }
      })
    }
  }

  let checkState = () => {
    console.log(session?.user?.name)
    console.log({ title, desc, Url, category });
  }
  return (
    <>
      <div>
        <button onClick={checkState}>check state</button>
        <div className="md:grid md:gap-6">
          <div className="mt-5 md:col-span-6 md:mt-0">
            <form action="#" method="POST">
              <div className="shadow sm:overflow-hidden sm:rounded-md">  {/*  form start */}
                <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-3 gap-6">


                    <div>

                      <div className="col-span-3 sm:col-span-2">
                        <label htmlFor="title" className="block text-lg font-medium text-gray-700" >
                          Title
                        </label>
                        <input
                          type="text"
                          name="title"
                          id="title"
                          autoComplete="email"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          onChange={(e) => handleTitle(e)}
                          value={title}
                        />
                        <div className="font-light text-red-500">{invalidTitle ? "Must have a name": ""}</div>
                      </div>


                      <div className="col-span-3 sm:col-span-2">
                        <label htmlFor="company-website" className="block text-lg font-medium text-gray-700">
                          Website
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                          <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
                            http://
                          </span>
                          <input
                            type="text"
                            name="company-website"
                            id="company-website"
                            className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="www.example.com"
                            onChange={(e) => handleUrl(e)}
                            value={Url}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="about" className="block text-lg font-medium text-gray-700">
                      About
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="about"
                        name="about"
                        rows={3}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"

                        onChange={(e) => handleDesc(e)}
                        value={desc}
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Brief description for your project. URLs are hyperlinked.
                    </p>
                  </div>
                  <div className="col-span-2 sm:col-span-3">
                    <label htmlFor="country" className="block text-lg font-medium text-gray-700">
                      Type
                    </label>
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      onChange={(e) => handleCategory(e)}
                    >
                      <option>Business</option>
                      <option>Software</option>
                      <option>Marketing</option>
                    </select>
                  </div>

                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  { createProjectLoading? <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-white py-2 px-4 text-sm font-medium text-indigo-600 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={(e) => handleCreateProject(e)}
                  >
                    Save
                  </button> :  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={(e) => handleCreateProject(e)}
                  >
                    Save
                  </button>
}
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={(e) => CloseForm(e)}
                  >
                    Cancel
                  </button>

                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
