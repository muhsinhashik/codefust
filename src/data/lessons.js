const lessons = {
  python: {
    football: {
      title: "Python Basics - Football Edition",
      description: "Learn Python using football-related examples!",
      example: `# Define a football player class
class Player:
    def __init__(self, name, goals):
        self.name = name
        self.goals = goals

    def display(self):
        print(f"{self.name} has scored {self.goals} goals this season!")

# Example usage
ronaldo = Player("Ronaldo", 25)
ronaldo.display()`,
    },
    space: {
      title: "Python Basics - Space Edition",
      description: "Learn Python using space-related examples!",
      example: `# Define a Planet class
class Planet:
    def __init__(self, name, distance):
        self.name = name
        self.distance = distance

    def info(self):
        print(f"{self.name} is {self.distance} million km from Earth.")

# Example usage
mars = Planet("Mars", 225)
mars.info()`,
    },
  },
  javascript: {
    football: {
      title: "JavaScript Fundamentals - Football Edition",
      description: "Learn JavaScript using football examples!",
      example: `// Define a football player object
class Player {
  constructor(name, goals) {
    this.name = name;
    this.goals = goals;
  }

  display() {
    console.log(\`\${this.name} has scored \${this.goals} goals this season!\`);
  }
}

// Example usage
const messi = new Player("Messi", 30);
messi.display();`,
    },
  },
};

export default lessons;
