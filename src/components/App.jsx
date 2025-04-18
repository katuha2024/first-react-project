import Product from './prodct/products';
import BookList from './book/booklist';
import favBooks from './book/favBooks';
import clsx from 'clsx';
import './App.css';

export default function App() {
  return (
    <>
      <h1>Books of the week</h1>
      <BookList books={favBooks} />
      <div className={clsx('wrapper-container')}>
        <h1>Best selling</h1>
        <Product
          name="Tacos With Lime"
          imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
          price={10.99}
        />
        <Product
          name="Fries and Burger"
          imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
          price={14.29}
        />
      </div>
    </>
  );
}
