import { ChangeEvent, useState } from "react"

export default function CreateProjectForm() {

  const [ title, setTitle ] = useState('')
  const [ website, setWebsite ] = useState('')
  const [ desc, setDesc ] = useState('')
  const [ category, setCategory ] = useState('Business')

  let handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value)
  }
  let handleWebsite = (e: ChangeEvent<HTMLInputElement>) => {
    setWebsite(e.currentTarget.value)
  }
  let handleDesc = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDesc(e.currentTarget.value)
  }
  let handleCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.currentTarget.value)
  }

  let checkState = () => {
    console.log({title, desc, website, category});
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
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700" >
                          Name
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
                      </div>


                      <div className="col-span-3 sm:col-span-2">
                        <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
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
                            onChange={(e) => handleWebsite(e)}
                            value={website}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="about" className="block text-sm font-medium text-gray-700">
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
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                      Country
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
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Save
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
