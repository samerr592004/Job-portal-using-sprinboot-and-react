import { Avatar, TextInput } from "@mantine/core"
import { IconSearch } from "@tabler/icons-react"

const DreamJob = () => {
  return (
    <div className="flex items-center px-16">
      <div className="flex flex-col w-[45%] gap-4">
        <div className="text-6xl font-bold leading-tight text-mine-shaft-100 [&>span]:text-bright-sun-400">
          Find your <span>dream job</span> with us
        </div>
        <div className="text-lx text-mine-shaft-200">
          Explore a variety of job opportunities tailored for you.
        </div>
        <div className="flex mt-3">
          <TextInput
            variant="unstyled"
            size="md"
            label="Job Title"
            placeholder="Software Engineer"
            className="bg-mine-shaft-900 rounded-lg p-4 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-100"
          />
          <TextInput
            variant="unstyled"
            size="md"
            label="Job Type"
            placeholder="Full-time"
            className="bg-mine-shaft-900 rounded-lg p-4 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-100"
          />
          <div className="flex items-center justify-center h-full w-28 bg-bright-sun-400 text-mine-shaft-100 rounded-lg cursor-pointer p-2 hover:bg-bright-sun-500">
            <IconSearch className="h-[85%] w-[85%]" />
          </div>
        </div>
      </div>
      <div className="w-[55%] flex items-center justify-center">
        <div className="relative w-[30rem]">
          <img src="Boy.png" alt="boy" />
          <div className="absolute -right-9 w-fit top-[47%] border-bright-sun-500 border backdrop-blur-md rounded-lg p-2">
            <div className="text-center text-mine-shaft-100 text-sm mb-1">10k+ got job</div>
            <Avatar.Group>
              <Avatar src="avatar1.png" />
              <Avatar src="avatar2.png" />
              <Avatar src="avatar.png" />
              <Avatar>+5</Avatar>
            </Avatar.Group>
          </div>

          <div  className="absolute -left-9 w-fit top-[27%] border-bright-sun-500 border backdrop-blur-md rounded-lg p-2 gap-3 flex flex-col">
            <div className="flex gap-2 items-center  rounded-lg">
              <div className="w-12 h-12 p-1  bg-mine-shaft-950 rounded-2xl">
                <img src="/Google.png" alt="lightning" />
              </div>
              <div>
                <div className="text-sm text-mine-shaft-100">Software Engineer</div>
                <div className="text-xs text-mine-shaft-200">New York</div>
              </div>
            </div>
            <div className="flex gap-2 text-mine-shaft-200 text-xs">
              <span>1 Day ago</span>
              <span>120 Applicants</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DreamJob