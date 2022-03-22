import React from 'react';
import styled from 'styled-components';
import Category from '../../components/Category';
import Book from '../../components/Book';

import categories from '../../data/mockCategories';
import books from '../../data/mockBooks';

const Container = styled.div`
  margin-top: 24px;
`;

const CategoriesOverflow = styled.div`
  width: calc(100% - 20px);
  max-width: calc(100% - 20px);
  margin-left: 20px;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const CategoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 820px;

  .all-categories {
    display: flex;
    align-items: center;
    padding: 0 8px;
    height: 40px;
    border-radius: 8px;
    margin-right: 8px;
    margin-bottom: 8px;
    background-color: #fff;
    cursor: pointer;
  }
`;

const BooksContainer = styled.div`
  width: 100%;
  max-width: 100%;

  .books-row {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    margin-top: 12px;
    overflow-x: hidden;
  }
`;

function CategoriesAndBooks() {
  const [activeCategories, setActiveCategories] = React.useState([]);

  const booksRow1 = books.slice(0, 5);
  const booksRow2 = books.slice(5, 11);
  const booksRow3 = books.slice(11, 16);

  const scrollRow1 = React.useRef();
  const scrollRow2 = React.useRef();
  const scrollRow3 = React.useRef();

  const setBooksScrollPosition = () => {
    const pageY = window.pageYOffset;
    scrollRow1.current.scrollLeft = pageY / 10;
    scrollRow2.current.scrollLeft = 50000 / (pageY / 10);
    scrollRow3.current.scrollLeft = pageY / 10;
  };

  const handleAddActiveCategory = (category) => {
    setActiveCategories([...activeCategories, category]);
  };

  const handleRemoveActiveCategory = (category) => {
    setActiveCategories(activeCategories.filter((activeCategory) => activeCategory !== category));
  };

  const setAllCategories = () => {
    setActiveCategories([]);
  };

  React.useEffect(() => {
    setTimeout(() => {
      setBooksScrollPosition();
    }, 500);
    window.addEventListener('scroll', () => {
      setBooksScrollPosition();
    });
  }, []);

  return (
    <Container>
      <CategoriesOverflow>
        <CategoriesContainer>
          <div className="all-categories" onClick={setAllCategories}>
            All categories
          </div>
          {categories.map((category) => (
            <Category
              key={category.id}
              handleAddActiveCategory={handleAddActiveCategory}
              handleRemoveActiveCategory={handleRemoveActiveCategory}
              active={activeCategories.includes(category.name)}
              {...category}
            />
          ))}
        </CategoriesContainer>
      </CategoriesOverflow>
      <BooksContainer>
        <div ref={scrollRow1} className="books-row first-books-row">
          {[...booksRow1, ...booksRow1, ...booksRow1, ...booksRow1, ...booksRow1, ...booksRow1].map(
            (book) => (
              <Book
                key={Math.random().toString(36).slice(2)}
                active={activeCategories.includes(book.category) || activeCategories.length === 0}
                {...book}
              />
            ),
          )}
        </div>
        <div ref={scrollRow2} className="books-row second-books-row">
          {[...booksRow2, ...booksRow2, ...booksRow2, ...booksRow2, ...booksRow2, ...booksRow2].map(
            (book) => (
              <Book
                key={Math.random().toString(36).slice(2)}
                active={activeCategories.includes(book.category) || activeCategories.length === 0}
                {...book}
              />
            ),
          )}
        </div>
        <div ref={scrollRow3} className="books-row third-books-row">
          {[...booksRow3, ...booksRow3, ...booksRow3, ...booksRow3, ...booksRow3, ...booksRow3].map(
            (book) => (
              <Book
                key={Math.random().toString(36).slice(2)}
                active={activeCategories.includes(book.category) || activeCategories.length === 0}
                {...book}
              />
            ),
          )}
        </div>
      </BooksContainer>
    </Container>
  );
}

export default CategoriesAndBooks;
