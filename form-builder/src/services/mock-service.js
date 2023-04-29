const uploadMock = async (mockData) => {
    const response = await fetch('http://www.mocky.io/v2/566061f21200008e3aabd919', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(mockData)
      })
      const result = await response.json();
      console.log(result);
      return result;
}

export {uploadMock};