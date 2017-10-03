import React from 'react';
import Autosuggest from 'react-autosuggest';
import _ from 'lodash';

// Imagine you have a list of languages that you'd like to autosuggest.
const languages = [
    {
        name: 'Data Structures',
        cid: 'IT101'
    },
    {
        name: 'Cyber Security',
        cid: 'IT102'
    },
    {
        name: 'Software Engg',
        cid: 'IT103'
    },
    {
        name: 'Deep Learning',
        cid: 'IT104'
    },
    {
        name: 'Game Development',
        cid: 'IT105'
    },
    {
        name: 'Networking',
        cid: 'IT106'
    },
    {
        name: 'Machine Learning',
        cid: 'IT107'
    },
    {
        name: 'Big Data',
        cid: 'IT108'
    },

];

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : languages.filter(lang =>
        lang.name.toLowerCase().slice(0, inputLength) === inputValue
    );
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
    <span>
        {suggestion.name}
    </span>
);

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            suggestions: []
        };
        this.onChange = this.onChange.bind(this);
        this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
        this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);
    }

    onChange (event, { newValue }) {
        this.setState({
            value: newValue
        }, () => {
            const l_obj = _.keyBy(languages, 'name');
            this.props.handleSearchValue(_.get(l_obj[newValue], 'cid', 'IT108'));
        });
    };

    // Autosuggest will call this function every time you need to update suggestions.
    // You already implemented this logic above, so just use it.
    onSuggestionsFetchRequested ({ value }) {
        const val = getSuggestions(value);
        this.setState({
            suggestions: val
        });
    };

    // Autosuggest will call this function every time you need to clear suggestions.
    onSuggestionsClearRequested() {
        this.setState({
            suggestions: []
        });
    };

    render() {
        const { value, suggestions } = this.state;
        const inputProps = {
            placeholder: 'Type a course name',
            value,
            onChange: this.onChange
        };

        return (
            <Autosuggest
                className="auto-suggest"
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}
            />
        );
    }
}