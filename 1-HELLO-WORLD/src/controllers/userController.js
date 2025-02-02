// Kullanıcıları saklamak için bir dizi oluşturuyoruz
let users = [
    { id: 1, name: "Ali" },
    { id: 2, name: "Ayşe" }
];

// Kullanıcıları getiren fonksiyon
const getUsers = (req, res) => {
    res.json(users);
};

// Yeni kullanıcı oluşturan fonksiyon
const createUser = (req, res) => {
    const { name } = req.body;
    const newUser = { id: users.length + 1, name };
    users.push(newUser); // Yeni kullanıcıyı listeye ekliyoruz
    res.status(201).json({ message: `Kullanıcı ${name} oluşturuldu!`, user: newUser });
};

module.exports = { getUsers, createUser };
