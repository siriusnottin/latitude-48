import { ScrollSequenceSection } from '../../components/ScrollSequenceSection';

const pouringCoffeeImages = [
  '_DSC2705',
  '_DSC2706',
  '_DSC2708',
  '_DSC2709',
  '_DSC2711',
  '_DSC2712',
  '_DSC2714',
  '_DSC2716'
].map(name => `/src/assets/images/${name}.webp?width=800`);

export const TestSection = () => {
  return (
    <ScrollSequenceSection
      images={pouringCoffeeImages}
      title="Aromatic\nCrossroads"
      description="At Latitude 48, we're crafting more than coffee – we're creating moments. Our journey spans continents, from the misty highlands of Ethiopia to the volcanic soils of Guatemala, bringing you a curated selection of the world's finest beans."
      imageAlt="Coffee pouring sequence"
    />
  );
}; 
