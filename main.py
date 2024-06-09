from flask import Flask , render_template, redirect
app = Flask(__name__)

@app.route("/")
def index():    
    return "hello world"

@app.route("/login")
def login():
    return render_template("signin.html")

@app.route("/register")
def register():
    return render_template("signup.html")

@app.route("/home")
def home():
    return render_template("home.html")

@app.route("/writer")
def become_writer():
    return render_template("becomewriter.html")
        
if __name__ == '__main__':
    app.run(debug=True)