import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Radio,
  Textarea,
  Select,
  Option,
} from "@material-tailwind/react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import * as Yup from 'yup';
import { addBlogs } from "../features/blogSlice";
import { nanoid } from "@reduxjs/toolkit";


const AddForm = () => {

  const dispatch = useDispatch();
  const nav = useNavigate();

  // const dat = ['ram', 'shyam'];


  // console.log(dat.includes('ram'));

  const valSchema = Yup.object({
    title: Yup.string().required(),
    detail: Yup.string().min(120).required(),
    place: Yup.string().required(),
    times: Yup.array().min(1).required(),
    country: Yup.string().required(),
    //  country: Yup.string().matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'please provide valid  email').required(),

    imageFile: Yup.mixed()

      .test('fileType', 'Invalid file type', (value) => {
        return value && ['image/jpeg', 'image/png', 'image/jpg'].includes(value.type);
      })

      .test('fileSize', 'File too large', (value) =>
        value && value.size <= 4 * 1024 * 1024
      )

  });
  const formik = useFormik({
    initialValues: {
      title: '',
      detail: '',
      place: '',
      times: [],
      country: '',
      imageFile: null,
      imageUrl: ''
    },
    onSubmit: (val) => {
      const newData = {
        title: val.title,
        detail: val.detail,
        place: val.place,
        times: val.times,
        country: val.country,
        imageUrl: val.imageUrl,
        id: nanoid()
      };
      dispatch(addBlogs(newData));
      nav(-1);
    },
    validationSchema: valSchema
  });

  const radioData = [
    { label: 'Home', color: 'red', },
    { label: 'OutDoor', color: 'purple', },
  ];
  const checkData = [
    { label: 'Morning', color: 'blue', },
    { label: 'Afternoon', color: 'red' },
    { label: 'Evening', color: 'green' },
  ];


  return (
    <Card className="py-5 px-10 max-w-lg mt-7 border-[1px] border-gray-700 mx-auto" color="transparent" shadow={true}>
      <Typography variant="h4" color="blue-gray">
        Add Your Daily Blogs
      </Typography>

      <form onSubmit={formik.handleSubmit} className="mt-6 mb-2 ">
        <div className="mb-1 flex flex-col gap-6">


          <div>
            <Input
              onChange={formik.handleChange}
              size="lg"
              label="Title"
              type="text"
              name="title"
              value={formik.values.title}
            />
            {formik.errors.title && formik.touched.title && <h1 className="mt-2 text-pink-700">{formik.errors.title}</h1>}

          </div>


          <Textarea
            label="Description"
            type="text"
            name="detail"
            size="lg"
            value={formik.values.detail}
            onChange={formik.handleChange}

          />


          <div>
            <Typography variant="h5" color="brown" >Pick The Place</Typography>

            <div className="flex w-max gap-4">
              {radioData.map((rad, i) => {
                return <Radio
                  value={rad.label}
                  onChange={formik.handleChange}
                  key={i}
                  name="place"
                  label={rad.label}
                  color={rad.color}
                />;
              })}


            </div>

          </div>



          <div>
            <Typography variant="h5" color="purple">Pick The Time</Typography>

            <div className="flex w-max gap-4">
              {checkData.map((check, i) => {
                return <Checkbox
                  onChange={formik.handleChange}
                  key={i}
                  value={check.label}
                  name="times"
                  label={check.label}
                  color={check.color} />;
              })}




            </div>
            {formik.errors.times && formik.touched.times && <h1 className="mt-2 text-pink-700">{formik.errors.times}</h1>}


          </div>



          <div className="w-72">
            <Select
              onChange={(e) => formik.setFieldValue('country', e)}
              label="Select Country">
              <Option value="nepal">Nepal</Option>
              <Option value="india">India</Option>
              <Option value="china">China</Option>

            </Select>
            {formik.errors.country && formik.touched.country && <h1 className="mt-2 text-pink-700">{formik.errors.country}</h1>}
          </div>

          <div>
            <Typography>Select Image</Typography>

            <Input
              onChange={(e) => {
                const file = e.target.files[0];
                formik.setFieldValue('imageFile', file);
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.addEventListener('load', (e) => {
                  formik.setFieldValue('imageUrl', e.target.result);
                })
              }}

              size="lg"
              label="Image"
              type="file"
              name="imageFile"
              accept="image/*"
            />
            {formik.errors.imageFile && formik.touched.imageFile && <h1 className="mt-2 text-pink-700">{formik.errors.imageFile}</h1>}

            {formik.values.imageUrl && <div className="mt-5 ">
              <img className="h-[200px]" src={formik.values.imageUrl} alt="" />
            </div>}

          </div>


        </div>

        <Button type="submit" className="mt-6" fullWidth>
          submit
        </Button>

      </form>
    </Card>
  )
}

export default AddForm
