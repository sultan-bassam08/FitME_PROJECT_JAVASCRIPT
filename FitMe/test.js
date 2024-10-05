const url = 'https://635e4847e15a78d0c4b8c9bb.mockapi.io/api/v1/nutrition'; // URL الخاص بالـ API الوهمي

document.getElementById('fetchButton').addEventListener('click', getNutrition);

async function getNutrition() {
    const foodItem = document.getElementById('foodInput').value.trim();
    
    try {
        const response = await fetch(`${url}?food=${foodItem}`);
        
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        displayResult(data);
    } catch (error) {
        console.error('Error fetching nutrition info:', error);
        document.getElementById('result').innerText = `فشل في جلب المعلومات: ${error.message}`;
    }
}

function displayResult(data) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // مسح النتائج السابقة

    if (data.length === 0) {
        resultDiv.innerText = 'لا توجد معلومات غذائية متاحة لهذا الطعام.';
        return;
    }

    data.forEach(item => {
        resultDiv.innerHTML += `
            <h3>${item.food}</h3>
            <p>السعرات الحرارية: ${item.calories}</p>
            <p>البروتين: ${item.protein} جرام</p>
            <p>الكربوهيدرات: ${item.carbohydrates} جرام</p>
            <p>الدهون: ${item.fat} جرام</p>
            <hr>
        `;
    });
}
