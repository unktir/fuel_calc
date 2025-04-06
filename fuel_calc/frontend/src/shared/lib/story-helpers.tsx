import { IconType } from 'shared/ui/icon';

export const IconsArgType = (iconList: IconType[]) => {
  const icons = iconList.reduce<Record<string, IconType>>((obj, icon) => {
    obj[icon.name || 'Icon'] = icon;
    return obj;
  }, {});

  return {
    options: Object.keys(icons),
    mapping: icons,
    control: {
      type: 'select' as const,
    },
  };
};
