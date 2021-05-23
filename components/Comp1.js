import styled from 'styled-components'
import tw from 'tailwind-styled-components'

const ProductTitle = `flex-auto text-xl font-semibold`

const ProductPrice = tw.div`
  text-xl
  font-semibold
  ${(props) => (props.active ? 'text-green-500' : 'text-gray-500')}
`

const Wrapper = styled.div`
  width: 30%;
  padding: 10px;
`

const CustomWrapper = tw(Wrapper)`
  border-4
  border-red-500
`

const ProductSubTitle = ({ children, ...props }) => {
  return (
    <div
      className='w-full flex-none text-sm font-medium text-gray-500 mt-2'
      {...props}
    >
      {children}
    </div>
  )
}

const Comp1 = ({ active = false }) => {
  return (
    <CustomWrapper>
      <div className='flex shadow-lg'>
        <div className='flex-none w-48 relative'>
          <img
            src='/classic-utility-jacket.jpg'
            alt=''
            className='absolute inset-0 w-full h-full object-cover'
          />
        </div>
        <form className='flex-auto p-6'>
          <div className='flex flex-wrap'>
            <h1 className={ProductTitle}>Classic Utility Jacket</h1>
            <ProductPrice active={active}>$110.00</ProductPrice>
            <ProductSubTitle>In stock</ProductSubTitle>
          </div>
          <div className='flex items-baseline mt-4 mb-6'>
            <div className='space-x-2 flex'>
              <label>
                <input
                  className='w-9 h-9 flex items-center justify-center bg-gray-100 rounded-lg'
                  name='size'
                  type='radio'
                  value='xs'
                  checked
                />
                XS
              </label>
              <label>
                <input
                  className='w-9 h-9 flex items-center justify-center'
                  name='size'
                  type='radio'
                  value='s'
                />
                S
              </label>
              <label>
                <input
                  className='w-9 h-9 flex items-center justify-center'
                  name='size'
                  type='radio'
                  value='m'
                />
                M
              </label>
              <label>
                <input
                  className='w-9 h-9 flex items-center justify-center'
                  name='size'
                  type='radio'
                  value='l'
                />
                L
              </label>
              <label>
                <input
                  className='w-9 h-9 flex items-center justify-center'
                  name='size'
                  type='radio'
                  value='xl'
                />
                XL
              </label>
            </div>
            <div className='ml-auto text-sm text-gray-500 underline'>
              Size Guide
            </div>
          </div>
          <div className='flex space-x-3 mb-4 text-sm font-medium'>
            <div className='flex-auto flex space-x-3'>
              <button
                className='w-1/2 flex items-center justify-center rounded-md bg-black text-white'
                type='submit'
              >
                Buy now
              </button>
              <button
                className='w-1/2 flex items-center justify-center rounded-md border border-gray-300'
                type='button'
              >
                Add to bag
              </button>
            </div>
            <button
              className='flex-none flex items-center justify-center w-9 h-9 rounded-md text-gray-400 border border-gray-300'
              type='button'
              aria-label='like'
            >
              <svg width='20' height='20' fill='currentColor'>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
                />
              </svg>
            </button>
          </div>
          <p className='text-sm text-gray-500'>
            Free shipping on all continental US orders.
          </p>
        </form>
      </div>
    </CustomWrapper>
  )
}
export default Comp1
