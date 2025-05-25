import React from 'react'
import { ErrorComponent } from '../../components/error'
import { useQuery } from '@tanstack/react-query'
import { Todo, fetchTodos } from './service'
import { Loader } from '../../components/loader'

export const Todos: React.FC = () => {
    const { isLoading, error, data } = useQuery({
        queryKey: ["getTodos"],
        queryFn: fetchTodos
    })
    if (isLoading) return <Loader message='Loading todos' />

    if (error) return <ErrorComponent message={error.message} />
    return (
        <>
            <h2 className='text-center mb-3'>Typicode Todos</h2>
            <div className='container d-flex flex-row flex-wrap '>
                {
                    data?.map((todo: Todo) => <div className={`shadow-sm m-2 p-2 d-flex flex-row align-items-center rounded-3 ${todo.completed ? "bg-info-subtle":"bg-light"} `} style={{ width:400 }}>
                        <span className='m-2 p-2 rounded-circle fw-bold fs-5 bg-primary-subtle text-center' style={{ width: 50 }}>{todo.id}</span>
                        <span className='flex-fill'>{todo.title}</span>
                    </div>)
                }
            </div>
        </>
    )
}
