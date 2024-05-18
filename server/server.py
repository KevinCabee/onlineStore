from flask import Flask, request
import json

app = Flask(__name__)

@app.get("/")
def home():
    return "Hello from flask"

# Create another API that redirects you to a test
@app.route("/test")
def test():
    return "This is a test page"


@app.route("/server")
def server():
    server = request.environ.get("SERVER_SOFTWARE")
    return server

@app.route("/api/about")
def about():
    myname={"name": "kevin cabrera"}
    return json.dumps(myname)

app.run(debug=True)