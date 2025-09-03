import { type FC } from 'react'
import { useForm } from 'react-hook-form'
import { Modal } from '../modal'
import { InputField } from '../inputField'
import Button from '../button'

interface FormValues {
  firstName: string
  lastName: string
  patronymic: string
  phone: string
  email: string
}

type ApplicationFormType = {
  isOpen: boolean
  handleClick: () => void
}

export const ApplicationForm: FC<ApplicationFormType> = ({
  handleClick,
  isOpen,
}) => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()

  const onSubmit = (data: FormValues) => {
    console.log('Заявка отправлена:', data)
    reset()
  }

  const handleClose = () => {
    reset()
    handleClick()
  }

  return (
    <div>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <h2 className="text-xl font-bold mb-4 text-center">Оставить заявку</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          <InputField
            label="Имя"
            placeholder="Введите имя"
            register={register('firstName', { required: 'Введите имя' })}
            error={errors.firstName}
          />

          <InputField
            label="Фамилия"
            placeholder="Введите фамилию"
            register={register('lastName', { required: 'Введите фамилию' })}
            error={errors.lastName}
          />

          <InputField
            label="Отчество"
            placeholder="Введите отчество"
            register={register('patronymic', { required: 'Введите отчество' })}
            error={errors.patronymic}
          />

          <InputField
            label="Телефон"
            type="tel"
            placeholder="+992 900 000 000"
            register={register('phone', {
              required: 'Введите телефон',
              pattern: {
                value: /^[0-9+\-() ]+$/,
                message: 'Некорректный номер',
              },
            })}
            error={errors.phone}
          />

          <InputField
            label="Email"
            type="email"
            placeholder="example@mail.com"
            register={register('email', {
              required: 'Введите email',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Некорректный email',
              },
            })}
            error={errors.email}
          />
          <Button>Отправить</Button>
        </form>
      </Modal>
    </div>
  )
}
