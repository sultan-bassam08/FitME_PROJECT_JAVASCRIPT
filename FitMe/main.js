document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // منع الإرسال الافتراضي للنموذج

  // جلب بيانات النموذج
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // التحقق إذا كانت الحقول ليست فارغة
  if (name && email && message) {
    // جلب البيانات السابقة من الـ Local Storage
    let storedData = JSON.parse(localStorage.getItem('contactFormData'));

    // التأكد من أن storedData هو مصفوفة أو إنشاء مصفوفة جديدة إذا لم تكن موجودة
    if (!Array.isArray(storedData)) {
      storedData = []; // إذا لم تكن موجودة، قم بإنشاء مصفوفة جديدة
    }

    // إنشاء كائن لتخزين البيانات
    const formData = {
      name: name,
      email: email,
      message: message,
      timestamp: new Date().toLocaleString() // يمكننا إضافة التوقيت للتفريق بين المدخلات
    };

    // إضافة البيانات الجديدة إلى المصفوفة
    storedData.push(formData); // إضافة البيانات الجديدة إلى المصفوفة

    // حفظ المصفوفة المحدثة في الـ Local Storage
    localStorage.setItem('contactFormData', JSON.stringify(storedData));

    // عرض رسالة النجاح
    const successMessage = document.getElementById('successMessage');
    successMessage.textContent = 'Successfully sent your message!';
    successMessage.style.display = 'block';

    // إخفاء رسالة النجاح بعد 3 ثوانٍ (اختياري)
    setTimeout(() => {
      successMessage.style.display = 'none';
    }, 3000);

    // إعادة تعيين حقول النموذج
    document.getElementById('contactForm').reset();
  } else {
    alert("Please fill in all fields before submitting.");
  }
});

// وظيفة لعرض جميع البيانات المخزنة (اختياري)
function displayStoredData() {
  const storedData = JSON.parse(localStorage.getItem('contactFormData')) || [];
  
  // عرض البيانات في وحدة التحكم (Console)
  console.log("Stored Contact Data:", storedData);
}

// about container
ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about__card", {
  ...scrollRevealOption,
  delay: 1500,
  interval: 500,
});

// price container
ScrollReveal().reveal(".price__card", {
  ...scrollRevealOption,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 20,
  autoplay: {
    delay: 3000, // Delay between slides in milliseconds (3 seconds in this case)
    disableOnInteraction: false, // Keeps autoplay running even after user interaction
  },
}); 
