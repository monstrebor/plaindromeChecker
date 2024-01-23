function checkPalindrome(){
    const inputValue = document.getElementById('text-input').value.toLowerCase();
    if(inputValue === ''){
      alert('Please input a value');
      return;
    }
    const cleanInput = inputValue.replace(/[^a-zA-Z0-9]/g, '');
          const isPalindrome = cleanInput === cleanInput.split('').reverse().join('');
        const resultElement = document.getElementById('result');
        resultElement.textContent = isPalindrome
          ? `${inputValue} is a palindrome`
          : `${inputValue} is not a palindrome`;
  };