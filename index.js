function submitData(name, email) {
  const formData = {
    name: name,
    email: email
  };

  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };

  return fetch("http://localhost:3000/users", configurationObject)
    .then(function(response) {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(function(object) {
      if (object && object.id) {
        document.body.innerHTML += object.id;
      } else {
        return new Error('Response did not contain expected data');
      }
    })
    .catch(function(error) {
      document.body.innerHTML += 'Unauthorized Access';
      return error;
    });
}
