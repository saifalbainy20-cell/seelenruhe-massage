# نظام الألوان الموحد - Unified Color System

## نظرة عامة

تم إنشاء نظام ألوان موحد لتسهيل إدارة الألوان في المشروع بأكمله. جميع الألوان معرّفة في مكانين رئيسيين:

1. **`tailwind.config.js`** - لاستخدام Tailwind CSS classes
2. **`src/styles/global.css`** - لاستخدام CSS Variables

## الألوان الرئيسية

### Primary Color (البرتقالي من اللوجو)
- **اللون الأساسي**: `#f6861f`
- **Tailwind Class**: `bg-primary`, `text-primary`, `border-primary`
- **CSS Variable**: `var(--color-primary)`
- **الاستخدام**: الأزرار الرئيسية، الروابط المهمة، العناصر التفاعلية

### Secondary Color (الأصفر من اللوجو)
- **اللون الأساسي**: `#edeb6d`
- **Tailwind Class**: `bg-secondary`, `text-secondary`, `border-secondary`
- **CSS Variable**: `var(--color-secondary)`
- **الاستخدام**: العناصر الثانوية، التأكيدات، الإشارات

### Accent Color (البني من اللوجو)
- **اللون الأساسي**: `#6f6549`
- **Tailwind Class**: `bg-accent`, `text-accent`, `border-accent`
- **CSS Variable**: `var(--color-accent)`
- **الاستخدام**: الخلفيات، العناصر الداعمة، الهيدر

## كيفية تغيير الألوان

### الطريقة 1: تعديل Tailwind Config

افتح ملف `tailwind.config.js` وعدّل الألوان في قسم `theme.extend.colors`:

```javascript
colors: {
  primary: {
    DEFAULT: '#f6861f',  // غيّر هذا اللون
    // ...
  },
  secondary: {
    DEFAULT: '#edeb6d',  // غيّر هذا اللون
    // ...
  },
  accent: {
    DEFAULT: '#6f6549',  // غيّر هذا اللون
    // ...
  },
}
```

### الطريقة 2: تعديل CSS Variables

افتح ملف `src/styles/global.css` وعدّل المتغيرات في قسم `:root`:

```css
:root {
  /* Primary Color - Orange from logo */
  --color-primary: #f6861f;          /* غيّر هذا */
  --color-primary-hover: #e76815;    /* غيّر هذا */
  
  /* Secondary Color - Yellow from logo */
  --color-secondary: #edeb6d;        /* غيّر هذا */
  --color-secondary-hover: #eab308;  /* غيّر هذا */
  
  /* Accent Color - Brown from logo */
  --color-accent: #6f6549;           /* غيّر هذا */
  --color-accent-hover: #5a4f3d;     /* غيّر هذا */
}
```

## الاستخدام في المكونات

### مثال 1: استخدام Tailwind Classes

```astro
<button class="bg-primary hover:bg-primary-600 text-white">
  احجز الآن
</button>
```

### مثال 2: استخدام CSS Variables

```astro
<div style="background-color: var(--color-primary);">
  محتوى
</div>
```

### مثال 3: في ملفات CSS

```css
.custom-button {
  background-color: var(--color-primary);
  color: white;
}

.custom-button:hover {
  background-color: var(--color-primary-hover);
}
```

## المكونات المتأثرة

جميع المكونات التالية تستخدم نظام الألوان الموحد:

- ✅ `src/components/Header.astro` - الهيدر
- ✅ `src/components/Hero.astro` - القسم الرئيسي
- ✅ `src/components/Services.astro` - قسم الخدمات
- ✅ `src/components/About.astro` - قسم من نحن
- ✅ `src/components/Footer.astro` - الفوتر
- ✅ `src/components/Welcome.astro` - قسم الترحيب
- ✅ `src/pages/[lang]/index.astro` - الصفحة الرئيسية
- ✅ `src/pages/[lang]/services/index.astro` - صفحة الخدمات
- ✅ `src/pages/[lang]/services/[slug].astro` - صفحات الخدمات الفردية

## ملاحظات مهمة

1. **عند تغيير الألوان**، تأكد من تحديثها في **كلا الملفين** (`tailwind.config.js` و `global.css`) للحصول على تناسق كامل.

2. **لا تستخدم ألوان مباشرة** في الكود (مثل `#f6861f`)، استخدم دائماً:
   - Tailwind classes: `bg-primary`, `text-primary`
   - أو CSS variables: `var(--color-primary)`

3. **اختبر التغييرات** على جميع الصفحات بعد تعديل الألوان للتأكد من التناسق.

4. **الألوان الحالية** مستوحاة من اللوجو الرسمي للموقع وتم اختيارها بعناية لتحقيق:
   - تباين جيد للقراءة
   - تناسق بصري
   - احترافية في التصميم

## أمثلة على الاستخدامات الشائعة

### الأزرار
```astro
<!-- زر رئيسي -->
<button class="bg-primary hover:bg-primary-600 text-white px-6 py-3 rounded-full">
  احجز الآن
</button>

<!-- زر ثانوي -->
<button class="bg-secondary hover:bg-secondary-600 text-gray-800 px-6 py-3 rounded-full">
  اعرف المزيد
</button>
```

### الروابط
```astro
<a href="/services" class="text-primary hover:text-primary-600">
  خدماتنا
</a>
```

### الخلفيات
```astro
<section class="bg-accent/10">
  <!-- محتوى -->
</section>
```

### الحدود
```astro
<div class="border-2 border-primary">
  <!-- محتوى -->
</div>
```

## الدعم والمساعدة

إذا واجهت أي مشاكل مع نظام الألوان:

1. تأكد من تشغيل `npm run dev` بعد تعديل `tailwind.config.js`
2. امسح الـ cache بالأمر: `rm -rf .astro && npm run dev`
3. تحقق من أن الألوان محدثة في كلا الملفين

---

**آخر تحديث**: أكتوبر 2025
