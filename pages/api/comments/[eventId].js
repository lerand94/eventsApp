const handler = (req, res) => {
  const eventId = req.query.eventId;

  if (req.method === "POST") {
    const { email, name, text } = req.body;

    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    const newComment = {
      id: new Date().toISOString(),
      email,
      name,
      text,
    };

    console.log(email, name, text);

    res.status(201).json({ message: "Added comment.", comment: newComment });
  }

  if (req.method === "GET") {
    const dummtList = [
      { id: "c1", name: "Max", text: "A first comment!" },
      { id: "c2", name: "Manu", text: "A second comment!" },
    ];
    rest.status(200).json({ comments: dummtList });
  }
};

export default handler;