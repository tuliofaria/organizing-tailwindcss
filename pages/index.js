import Comp1 from '../components/Comp1'

const Index = () => {
  return (
    <>
      <h1 className='bg-gray-300'>TailwindCSS</h1>
      <p>Paragraph.</p>
      <Comp1 />
      <hr />
      <Comp1 active={true} />
    </>
  )
}
export default Index
