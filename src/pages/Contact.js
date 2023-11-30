import { useFormik } from 'formik'
import React from 'react'

const Contact = ({ addSome }) => {

  const formik = useFormik({
    initialValues: {
      title: '',
      detail: ''
    },
    onSubmit: (val, { resetForm }) => {

      addSome(val);
      resetForm();

    }
  });


  return (
    <div className='p-2'>

      <form onSubmit={formik.handleSubmit}>
        <p className='space-y-2'>
          <label htmlFor="title">Title</label>
          <br />
          <input
            name='title'
            id='title'
            onChange={formik.handleChange}
            value={formik.values.title}
            className='border-2 border-gray-600 px-2 outline-none focus:ring-pink-400 focus:ring-1' type="text" placeholder='title' />
        </p>

        <p className='space-y-2'>
          <label htmlFor="detail">Title</label>
          <br />
          <textarea
            name='detail'
            id='detail'
            onChange={formik.handleChange}
            value={formik.values.detail}
            className='border-2 border-gray-600 px-2 outline-none focus:ring-pink-900 focus:ring-1' type="text" placeholder='detail' />
        </p>
        <button type='submit' className='mt-2 bg-slate-500 text-white px-3 text-sm py-1 rounded-sm'>Submit</button>

      </form>

    </div>
  )
}

export default Contact
