import os

BASEDIR = os.path.abspath(os.path.dirname(__file__))

# Project
# -------

TITLE = 'MEMEX EXPLORER'
ADMINS = []

# Server
# ------

HOST = '0.0.0.0'
PORT = 5000
DEBUG = True

# Database
# --------

SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(BASEDIR, 'app.db')
SQLALCHEMY_MIGRATE_REPO = os.path.join(BASEDIR, 'db_repository')

# Email
# -----

MAIL_SERVER = 'smtp.gmail.com'
MAIL_PORT = 465
MAIL_USE_TLS = False
MAIL_USE_SSL = True
MAIL_USERNAME = ''
MAIL_PASSWORD = ''
MAIL_DEBUG = True
DEFAULT_MAIL_SENDER = MAIL_USERNAME


# Crawlers Path
# ------------

SEED_FILES = os.path.join(BASEDIR, 'seeds/')
MODEL_FILES = os.path.join(BASEDIR, 'models/')
CONFIG_FILES = os.path.join(BASEDIR, 'configs/')

CRAWLS_PATH = os.path.join(BASEDIR, 'crawls/')
