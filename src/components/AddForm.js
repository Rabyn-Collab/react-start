import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";



const AddForm = () => {
  return (
    <Card className="py-5 px-10 max-w-lg mt-7 border-[1px] border-gray-700 mx-auto" color="transparent" shadow={true}>
      <Typography variant="h4" color="blue-gray">
        Add Your Daily Blogs
      </Typography>

      <form className="mt-6 mb-2 ">
        <div className="mb-1 flex flex-col gap-6">

          <Input
            size="lg"
            placeholder="name@mail.com"
          />

          <Input
            size="lg"
            placeholder="name@mail.com"
          />


        </div>

        <Button className="mt-6" fullWidth>
          sign up
        </Button>

      </form>
    </Card>
  )
}

export default AddForm
