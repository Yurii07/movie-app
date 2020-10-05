import React, {Component} from 'react';

import {connect} from 'react-redux';

import {searchMovie, fetchMovies, setLoading} from '../../actions/searchActions';

export class SearchForm extends Component {
    onChange = e => {
        this.props.searchMovie(e.target.value);
    };

    onSubmit = e => {
        e.preventDefault();
        this.props.fetchMovies(this.props.text);
        this.props.setLoading();
    };

    render() {
        return (
            <div className="jumbotron jumbotron-fluid bg-secondary mt-5 text-center" style={{position: "relative",
                background: "linear-gradient(to right, #4b134f, #c94b4b)"
            }}>

                <div className="pg" style={{
                    position: "absolute",
                    width: "40%",
                    right: 0,
                    bottom: 0,
                }}>
                    <img src="http://riccardotartaglia.it/img/deadpool/deadpool.png" style={{height: 425}} alt="dead pool"/>
                </div>

                <div id="card" style={{padding: 30 }}>
                    <div className="text-block" style={{width: "60%"}}>
                        <h1 className="display-4 mb-3" style={{fontWeight: "bold"}}>
                            <i className="fab fa-studiovinari " /> Find movies to enjoy...
                        </h1>
                        <form id="searchForm" onSubmit={this.onSubmit}>
                            <input
                                type="text"
                                className="form-control"
                                name="searchText"
                                placeholder="Find movie..."
                                onChange={this.onChange}
                            />
                            <button type="submit" className="btn btn-primary btn-bg mt-3">
                                Search
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        );
    }
}

const mapStateToProps = state => ({
    text: state.movies.text
});

export default connect(
    mapStateToProps,
    {searchMovie, fetchMovies, setLoading}
)(SearchForm);