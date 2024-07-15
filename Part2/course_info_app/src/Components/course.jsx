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

export default Course;