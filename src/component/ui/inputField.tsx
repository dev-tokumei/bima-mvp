import type { FieldError } from 'react-hook-form'

interface InputFieldProps {
  label: string
  type?: string
  placeholder?: string
  register: any
  error?: FieldError
}

export const InputField = ({
  label,
  type = 'text',
  placeholder,
  register,
  error,
}: InputFieldProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        {...register}
        className="border rounded-lg p-2 focus:outline-none  focus:border-[#fbbe07]"
      />
      {error && <span className="text-red-500 text-sm">{error.message}</span>}
    </div>
  )
}
