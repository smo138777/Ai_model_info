import React from 'react';
import Ai from './Ai'; // ✅ استيراد المكون

function App() {
  return (
    <div className="App">
      <Ai /> {/* ✅ استخدام المكون داخل الصفحة */}
    </div>
  );
}

export default App;
