import { View, Text, ScrollView } from 'react-native';
import React from 'react';

import CategoryCard from './CategoryCard';

const Categories = () => {
  return (
    <ScrollView
    contentContainerStyle={{
      display: 'flex',
      gap: 25,
      padding: 15,
      backgroundColor: '#673ab7' 
    }}
    horizontal
    showsHorizontalScrollIndicator={false}
    >
      {/* CategoryCard */}
      <CategoryCard imgUrl="https://podroze.smcloud.net/t/photos/t/139278/kuchnia-tajska_1021724.jpg" title='Loho Thai Jolo'/>
      <CategoryCard imgUrl="https://podroze.smcloud.net/t/photos/t/139278/kuchnia-tajska_1021724.jpg" title="Thai Wok "/>
      <CategoryCard imgUrl="https://podroze.smcloud.net/t/photos/t/139278/kuchnia-tajska_1021724.jpg" title="Chang Thai Street Food "/>
      <CategoryCard imgUrl="https://podroze.smcloud.net/t/photos/t/139278/kuchnia-tajska_1021724.jpg" title="Panaya "/>
      <CategoryCard imgUrl="https://podroze.smcloud.net/t/photos/t/139278/kuchnia-tajska_1021724.jpg" title="Lao Thai"/>
      <CategoryCard imgUrl="https://podroze.smcloud.net/t/photos/t/139278/kuchnia-tajska_1021724.jpg" title="Hito Sushi"/>
      <CategoryCard imgUrl="https://podroze.smcloud.net/t/photos/t/139278/kuchnia-tajska_1021724.jpg" title="Zen Thai Asia Food"/>
    
    </ScrollView>
  );
};

export default Categories;