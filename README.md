# gitbook-plugin-lilypond-highlight

`lilypond-highlight` is a Gitbook plugin that produces  syntax-highlighting for
LilyPond code fragments.  It makes use of the
[python-ly](https://github.com/wbsoft/python-ly) library, which is therefore an
external dependency.

## Installation

```
$ npm install gitbook-plugin-lilypond-highlight
```

### python-ly

`python-ly` can be installed through pip:

```
pip install python-ly
```

(using `sudo` if appropriate on your system.  It is also possible to install
python-ly through its Git repository, but that will require some extra work to
set up paths.)

To check if `python-ly` is properly accessible running

```
ly --help
```

from anywhere should correctly print the help information.

### Stylesheet

**TODO:** Properly handle (and document) the necessary stylesheet.

## Usage

This plugin only exposes one block command that allows inserting LilyPond code:

```
{% lilypond %}
insert arbitrary LilyPond code
{% endlilypond %}
```
