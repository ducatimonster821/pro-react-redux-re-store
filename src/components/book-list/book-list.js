import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withBookstoreService } from '../hoc';
import { booksLoaded, booksRequested, booksError } from '../../actions';
import { compose } from '../../utils';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './book-list.css';

class BookList extends Component {
    componentDidMount() {
        // console.log(this.props);
        // const {
        //     bookstoreService,
        //     booksLoaded,
        //     booksRequested,
        //     booksError } = this.props;
        //
        // booksRequested();
        //
        // bookstoreService.getBooks()
        //     .then((data) => {
        //         console.log('data', data);
        //         booksLoaded(data)
        //     }).catch((err) => booksError(err));

        // bookstoreService.getBooks()
        //   .then((data) => booksLoaded(data));

        this.props.fetchBooks();
    }

    render() {
        console.log(this.props);

        const { books, loading, error } = this.props;

        if (loading) {
            return <Spinner />;
        }

        if (error) {
            return <ErrorIndicator />;
        }

        return (
            <ul className="book-list">
                {
                    books.map((book) => {
                        return (
                            <li key={book.id}><BookListItem book={book} /></li>
                        )
                    })
                }
            </ul>
        );
    }
}

// const mapStateToProps = (state) => {
const mapStateToProps = ({ books, loading, error }) => {
    return {
        // books: state.books
        books,
        loading,
        error
    }
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         booksLoaded: (newBooks) => {
//             dispatch({
//                 type: 'BOOKS_LOADED',
//                 payload: newBooks
//             });
//         }
//     };
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         booksLoaded: (newBooks) => {
//             dispatch(booksLoaded(newBooks));
//         }
//     };
// };

// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({
//         booksLoaded
//     }, dispatch);
// };

// const mapDispatchToProps = {
//     booksLoaded,
//     booksRequested,
//     booksError
// };

const mapDispatchToProps = (dispatch, ownProps) => {
    const { bookstoreService } = ownProps;
    return {
        fetchBooks: () => {
            console.log('Fetching Books');

            dispatch(booksRequested());

            bookstoreService.getBooks()
                .then((data) => dispatch(booksLoaded(data)))
                .catch((err) => dispatch(booksError(err)));
        }
    }
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);

// export default withBookstoreService()(
//     connect(mapStateToProps, mapDispatchToProps)(BookList)
// );
