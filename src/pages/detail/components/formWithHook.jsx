import { Card, CardContent, TextField } from '@material-ui/core'
import { useEffect } from 'react'
import { useForm, Controller, useWatch } from 'react-hook-form'

const Form = ({ country }) => {
  // eslint-disable-next-line no-unused-vars
  const { handleSubmit, formState: { errors }, register, control, reset } = useForm()
  const city = useWatch({ control, name: 'image' })

  useEffect(() => {
    console.log(city)
  }, [city])

  useEffect(() => {
    console.log('country', country)
  }, [country])

  const onSubmit = (values, evt) => {
    console.log(values)
    evt.target.reset() // reseta cuando sealiza un submit
    reset({ firtsName: '' }) // como es un campo controlado es necesario setearlo para limpiar
  }
  return (
        <Card style = {{ margin: '10px' }} >
          <CardContent>
            <h1>Formulario con React hook Form</h1>
            <form className='form-content' onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="firstName"
                control={control}
                rules={{ required: true }}
                render={({ field }) => <TextField {...field} />}
            />
            {errors.firstName?.type === 'required' && 'First name is required'}
              <TextField
                {...register('image', { required: true })}
                // defaultValue={country.image}
                label="image"
                variant="outlined"
                margin="normal"
                error={!!errors.image}
                helperText={!!errors.image && 'Imangen inválido'}
                required/>
              <TextField {...register('city', { required: true })} label="Name" variant="outlined" margin="normal"/>
              {errors.city?.type === 'required' && 'First name is required'}
              <TextField {...register('country')} label="country" variant="outlined" margin="normal"/>
              <TextField {...register('lat')} label="Lat" variant="outlined" margin="normal"/>
              <TextField {...register('lng')} label="Long" variant="outlined" margin="normal"/>
              <button>Submit</button>
            </form>
          </CardContent>
        </Card>
  )
}
export default Form
