# nunjucks-filter-moment

This defines a dateFormat filter for [Nunjucks](https://mozilla.github.io/nunjucks/) implementing [Moment.js | Home](https://momentjs.com/), a rich date manager.

Use 

// with no format

This blog has been created at {{ creation_date | dateFormat }}.

// with a custom format

This blog has been created at {{ creation_date | dateFormat("YYYY-MM-DD hh:mm:ss") }}.

// with a custom format and timezone

This blog has been created at {{ creation_date | dateFormat("YYYY-MM-DD hh:mm:ss", "America/New_York") }}.

// with a custom format and i18n

This blog has been created at {{ creation_date | dateFormat("ddd", "", "zh-cn") }}.
