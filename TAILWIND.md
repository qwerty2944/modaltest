# Tailwind CSS 커스텀 설정 가이드

## `pxr` 단위로 커스텀 간격 설정

이 가이드는 `pxr` 단위를 사용한 Tailwind CSS 커스텀 간격 설정과 반응형 디자인 및 인라인 스타일을 위한 추가 가이드라인을 다룹니다.

### 커스텀 간격 스케일

우리는 `pxr` 단위를 사용한 커스텀 간격 스케일을 정의합니다. `1pxr`은 `0.0625rem`(1px = 0.0625rem)과 동일합니다. 이는 양수 및 음수 값을 모두 포함합니다.

#### 양수 값

`0pxr`부터 `999pxr`까지의 간격을 정의합니다.

#### 음수 값

음수 간격은 `-` 접두사를 사용하여 정의됩니다(예: `-1pxr`). 음수 간격은 `-top-1pxr`처럼 사용됩니다.

### Tailwind CSS에서 사용 예시

다음은 다양한 속성에서 커스텀 `pxr` 단위를 사용하는 예시입니다. `spacing`, `width`, `height`, `margin`, `padding`, `inset` 속성에 사용할 수 있습니다.

```tsx
<div className="w-16pxr h-16pxr">이 div는 너비와 높이가 1rem(16px)입니다</div>
<div className="mt-8pxr">이 div는 상단 마진이 0.5rem(8px)입니다</div>
<div className="-ml-4pxr">이 div는 좌측 마진이 -0.25rem(-4px)입니다</div>
```

## 반응형 디자인을 위한 미디어 쿼리

반응형 디자인을 위해 Tailwind CSS 설정에서 커스텀 브레이크포인트를 정의합니다. 아래는 사용되는 브레이크포인트입니다:

- mobile: @media (min-width: 360px)
- foldable: @media (min-width: 523px)
- tablet: @media (min-width: 768px)
- under-foldable: @media (max-width: 522px)
- under-tablet: @media (max-width: 767px)
- under-mobile: @media (max-width: 359px)

### 모바일 우선 디자인 예시

```tsx
<div className='mobile:bg-blue-500 foldable:bg-green-500 tablet:bg-red-500'>
  이 div는 다른 브레이크포인트에서 다른 배경색을 가집니다.
</div>
```

이 예시에서:

- 배경색은 모바일 디바이스(min-width: 360px)에서 파란색입니다.
- 접이식 디바이스(min-width: 523px)에서 초록색으로 변경됩니다.
- 태블릿(min-width: 768px)에서는 빨간색으로 변경됩니다.

## max-width 유틸리티 클래스 사용법

Tailwind CSS의 max-width 유틸리티 클래스를 사용하여 요소의 최대 너비를 설정할 수 있습니다. 이는 다양한 레이아웃 요구 사항을 충족시키는 데 유용합니다.

### 예시

다음 예시에서는 max-width 클래스를 사용하여 요소의 최대 너비를 설정하는 방법을 보여줍니다:

```tsx
<div className='max-w-16pxr mx-auto'>
  이 div는 최대 너비가 1rem이고, 화면 크기가 이보다 클 경우 중앙에 정렬됩니다.
</div>
```

이 예시에서는 max-w-16pxr 클래스를 사용하여 요소의 최대 너비를 설정하고, mx-auto 클래스를 사용하여 요소를 중앙에 정렬합니다.

```tsx
<div className='max-w-16pxr mobile:max-w-32pxr foldable:max-w-64pxr tablet:max-w-lg mx-auto'>
  이 div는 작은 화면에서는 최대 너비가 1rem, 모바일에서는 2rem, 접이식
  디바이스에서는 4rem, 태블릿에서는 32rem로 설정되며, 중앙에 정렬됩니다.
</div>
```

이 예시에서는 반응형 디자인을 적용하여 다양한 화면 크기에서 최대 너비를 다르게 설정하고, 요소를 항상 중앙에 정렬합니다.

## 인라인 스타일 가이드라인

특히 Framer Motion과 같은 라이브러리를 사용하는 컴포넌트에서 인라인 스타일을 사용할 때, px 대신 rem 또는 % 단위를 사용하여 일관성과 확장성을 유지합니다. 또한, 인라인 스타일 사용을 최소화하고 Tailwind CSS 클래스를 최대한 활용하십시오. 임의의 속성(arbitrary properties)을 사용하지 마십시오.

### Framer Motion 예시

```tsx
import { motion } from 'framer-motion';

const MyComponent = () => {
  return (
    <motion.div
      style={{ width: '50%', height: '2rem' }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      이 div는 불투명도를 애니메이트합니다.
    </motion.div>
  );
};
```

## 레이아웃 조정을 위한 useEffect 사용 지양

컴포넌트 크기나 레이아웃을 조정하기 위해 useEffect와 같은 훅을 사용하는 것을 피합니다. 대신 Tailwind CSS 클래스와 반응형 디자인 기법을 사용합니다.

### 예시

다음과 같은 방식 대신:

```tsx
import { useEffect, useState } from 'react';

const MyComponent = () => {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <div style={{ width: size }}>이 div는 창 크기에 따라 조정됩니다</div>;
};
```

Tailwind CSS 클래스를 사용합니다:

```tsx
<div className='w-full mobile:w-1/2 tablet:w-1/4'>
  이 div는 Tailwind CSS 클래스를 사용하여 화면 크기에 따라 조정됩니다
</div>
```

## PurgeCSS를 위한 safelist

클래스가 조건부로 적용되거나 동적으로 사용될 때, 빌드 과정에서 특정 클래스를 유지하기 위해 safelist에 포함시킵니다.

### 예시

```tsx
purge: { options: { safelist: ['w-7', 'h-7', 'w-5', 'h-5'], }, },
```

이 설정은 이러한 클래스가 실제 코드 분석에 나타나지 않더라도 보존되도록 합니다.

## 결론

이 가이드는 Tailwind CSS를 위한 커스텀 설정에 대한 개요를 제공합니다. 여기에는 간격을 위한 pxr 단위 사용, 반응형 디자인 브레이크포인트, rem 및 % 단위를 사용한 인라인 스타일링, 레이아웃 조정을 위한 훅 사용 지양 등 베스트 프랙티스가 포함됩니다. 이 가이드를 따르면 애플리케이션의 스타일을 확장 가능하고 유지 보수 가능하게 만들 수 있습니다.
