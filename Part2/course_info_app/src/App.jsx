const Course = ({course}) => {
  const exercises = course.parts.map((part) => part.exercises)
  return (
    <div>
      <Header header = {course.name} />
      <Content parts = {course.parts} />
      <Total exercises = {exercises} />
    </div>
  )
}

const Total = ({exercises}) => {
  const total = exercises.reduce((total, current) => total += current)
  return (
    <h4>total of {total} exercises</h4>
  )
}

const Part = ({part, exercise}) => <p>{part} {exercise}</p>

const Content = ({parts}) => {
  return (
    <div>
      {parts.map( (part) => <Part key={part.id} part = {part.name} exercise = {part.exercises} />)}
    </div>
  )
}

const Header = ({header}) => {
  return (
    <div>
      <h1>{header}</h1>
    </div>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <Course key = {courses[0].id} course = {courses[0]} />
      <Course key = {courses[1].id} course = {courses[1]} />
    </div>
  )
}

export default App