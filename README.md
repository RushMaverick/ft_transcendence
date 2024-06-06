- django
  - django channels
    - Websockets for realtime gaming
      - [Doc - Tutorial Part1: Basic Setup](https://channels.readthedocs.io/en/latest/tutorial/part_1.html)
    - Authenticatates user with auth-token
      - [Doc - Custom Authentication](https://channels.readthedocs.io/en/stable/topics/authentication.html#custom-authentication)
      - [Stackoverflow - TokenAuthMiddleware](https://stackoverflow.com/a/65437244)
  - django rest_framework
    - REST API
      - [Doc - Quickstart](https://www.django-rest-framework.org/tutorial/quickstart/)
    - Creating user authentication token
      - [Doc - TokenAuthentication](https://www.django-rest-framework.org/api-guide/authentication/#tokenauthentication)
      - [Medium - Token-Based Authentication](https://medium.com/django-unleashed/token-based-authentication-and-authorization-in-django-rest-framework-user-and-permissions-347c7cc472e9)
  - [Stackoverflow - Generate new secret key](https://stackoverflow.com/a/67423892)


#### 1\. Setup virtual environment
Python should be upgrade to Python 3.12 or upper before running the following command-- the app expects Python3
```
$ python -m venv myvenv
```
#### 2\. Activite virtual environment 
‼️ Be aware : The path might slightly vary depending on your operating system
```
$ source myvenv/bin/activate
```
#### 3\. Install required packages
For the assignment requirements
```
$ pip install -r requirements.txt
```

### Run Flask to see working API <a name = "run_flask"></a>

Run the following command in the same directory where all the files are
```
$ python manage.py runserver
```

**Remember to put semantic messages when you are pushing to master

See how a minor change to your commit message style can make you a better programmer.

Format: `<type>(<scope>): <subject>`

`<scope>` is optional

Examples:

- `feat`: (new feature for the user, not a new feature for build script)
- `fix`: (bug fix for the user, not a fix to a build script)
- `docs`: (changes to the documentation)
- `style`: (formatting, missing semi colons, etc; no production code change)
- `refactor`: (refactoring production code, eg. renaming a variable)
- `test`: (adding missing tests, refactoring tests; no production code change)
- `chore`: (updating grunt tasks etc; no production code change)