const Course = ({course}) => {
  return (
    <div>
      <Header header = {course.name} />
      <Content parts = {course.parts} />
    </div>
  )
}

const Part = ({part, exercise}) => {
  return (
    <div>
      <p>
        {part} {exercise}
      </p>
    </div>
  )
}

const Content = ({parts}) => {
  const total = parts[0].exercises + parts[1].exercises + parts[2].exercises + parts[3].exercises
  return (
    <div>
      <Part part = {parts[0].name} exercise = {parts[0].exercises}/>
      <Part part = {parts[1].name} exercise = {parts[1].exercises}/>
      <Part part = {parts[2].name} exercise = {parts[2].exercises}/>
      <Part part = {parts[3].name} exercise = {parts[3].exercises}/>
      <h4>total of {total} exercises</h4>
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
  const course = {
    id: 1,
    name: 'Half Stack application development',
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
  }

  return <Course course={course} />
}

export default App