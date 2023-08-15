import React, { Component } from 'react';
import Newsitem from './Newsitem';
import Spinner from './Spinner';

export default class News extends Component {
    constructor() {
        super();
        this.state = {
            article: [], // Initialize with an empty array
            loading: false,
            page: 1
        };
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=9ee3db9c9c154c7fa2e7680e3f1e4fb1&page=1&pageSize=${this.props.pagesize}`;
        this.setState({loading: true})
        let data = await fetch(url);
        let parseddata = await data.json(); // Await the JSON parsing
        this.setState({
            article: parseddata.articles,
            totalResults: parseddata.totalResults,
            loading: false
        });
    }

    handlePrevClick = async () => {
        window.scrollTo(0, 0)
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=9ee3db9c9c154c7fa2e7680e3f1e4fb1&page=${this.state.page - 1}&pageSize=${this.props.pagesize}`;
        this.setState({loading: true})
        let data = await fetch(url);
        let parseddata = await data.json(); // Await the JSON parsing
        this.setState({
            page: this.state.page - 1,
            article: parseddata.articles,
            loading: false,
        })
    }

    handleNextClick = async () => {
        window.scrollTo(0, 0)
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults /this.props.pagesize))) {
            let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=9ee3db9c9c154c7fa2e7680e3f1e4fb1&page=${this.state.page + 1}&pageSize=${this.props.pagesize}`;
            this.setState({loading: true})
            let data = await fetch(url);
            let parseddata = await data.json(); // Await the JSON parsing
            this.setState({
                page: this.state.page + 1,
                article: parseddata.articles,
                loading: false,
            })
        }
    }

    render() {
        return (
            <div className="container mt-3">
                <h1 className='fw-5 fs-1 text-center'>Top Headlines</h1>
                {this.state.loading && <Spinner />}
                <div className="row mt-3">
                    {!this.state.loading && this.state.article.map((article, index) => {
                        return (
                            <div className='col-md-4' key={index}>
                                <Newsitem
                                    title={article.title}
                                    description={article.description}
                                    imageurl={article.urlToImage}
                                    url={article.url}
                                />
                            </div>
                        );
                    })}
                </div>
                <div className="conatiner d-flex gap-2 my-3 justify-content-between">
                    <button className='btn btn-dark' disabled={this.state.page <= 1} onClick={this.handlePrevClick}>Previous</button>
                    <button className='btn btn-dark' disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize)} onClick={this.handleNextClick}>Next</button>
                </div>
            </div>
        );
    }
}
