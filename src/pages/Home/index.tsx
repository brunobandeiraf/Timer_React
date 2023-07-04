import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from './styles'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(5, 'O ciclo precisa ser de no mínimo 5 minutos.')
    .max(60, 'O ciclo precisa ser de no máximo 60 minutos.'),
})

// Em vez de utilizar Inteface, 
// utilizei o Zod para inferir os tipos
type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {

  // register add um input no formulário
  // {...register('task')}

  // handleSubmit recebe a função como parm
  // onSubmit={handleSubmit(handleCreateNewCycle)}

  // watch fica observando determinado campo
  // const task = watch('task')
  const { register, handleSubmit, watch, reset} = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    // Valor inicial de cada campo
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })


  function handleCreateNewCycle(data: NewCycleFormData) {
    console.log(data)
    reset() // Redefine os valares, conforme o defaultValues
  }

  const task = watch('task')
  const isSubmitDisable = !task

  return (
    <HomeContainer>
       <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para o seu projeto"
            {...register('task')}
          />

          <datalist id="task-suggestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
            <option value="Banana" />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5} //5 em 5
            min={5} // mínimo 5
            max={60} // máximo 60
            // valueAsNumber - defino como somente número
            {...register('minutesAmount', { valueAsNumber: true })}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton disabled={isSubmitDisable} type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}