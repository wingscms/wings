import React from 'react';
import styled from 'styled-components';
import { text } from '@storybook/addon-knobs/react';
import { LanguagePicker } from '../../../src/components/menu';

const Wrapper = styled.div`
  display: block;
  margin: 0 auto;
`;

export const LanguagePickerInfo = `
  documentation...
`;

export const LanguagePickerStory = () => (
  <Wrapper>
    <LanguagePicker
      current={text('Current', 'en')}
      translations={text(
        'Translations',
        'ach,ady,af,af-NA,af-ZA,ak,ar,ar-AR,ar-MA,ar-SA,ay-BO,az,az-AZ,be-BY,bg,bg-BG,bn,bn-IN,bn-BD,bs-BA,ca,ca-ES,cak,ck-US,cs,cs-CZ,cy,cy-GB,da,da-DK,de,de-AT,de-DE,de-CH,dsb,el,el-GR,en-GB,en-AU,en-CA,en-IE,en-IN,en-PI,en-UD,en-US,en-ZA,en@pirate,eo,eo-EO,es,es-AR,es-419,es-CL,es-CO,es-EC,es-ES,es-LA,es-NI,es-MX,es-US,es-VE,et,et-EE,eu,eu-ES,fa,fa-IR,fb-LT,ff,fi,fi-FI,fo-FO,fr,fr-CA,fr-FR,fr-BE,fr-CH,fy-NL,ga,ga-IE,gl,gl-ES,gn-PY,gu-IN,gx-GR,he,he-IL,hi,hi-IN,hr,hr-HR,hsb,ht,hu,hu-HU,hy-AM,id,id-ID,is,is-IS,it,it-IT,ja,ja-JP,jv-ID,ka-GE,kk-KZ,km,km-KH,kab,kn,kn-IN,ko,ko-KR,ku-TR,la,la-VA,lb,li-NL,lt,lt-LT,lv,lv-LV,mai,mg-MG,mk,mk-MK,ml,ml-IN,mn-MN,mr,mr-IN,ms,ms-MY,mt,mt-MT,my,no,nb,nb-NO,ne,ne-NP,nl,nl-BE,nl-NL,nn-NO,oc,or-IN,pa,pa-IN,pl,pl-PL,ps-AF,pt,pt-BR,pt-PT,qu-PE,rm-CH,ro,ro-RO,ru,ru-RU,sa-IN,se-NO,si-LK,sk,sk-SK,sl,sl-SI,so-SO,sq,sq-AL,sr,sr-RS,su,sv,sv-SE,sw,sw-KE,ta,ta-IN,te,te-IN,tg,tg-TJ,th,th-TH,tl,tl-PH,tlh,tr,tr-TR,tt-RU,uk,uk-UA,ur,ur-PK,uz,uz-UZ,vi,vi-VN,xh-ZA,yi,yi-DE,zh,zh-Hans,zh-Hant,zh-CN,zh-HK,zh-SG,zh-TW,zu-ZA',
      )
        .split(',')
        .map(x => ({ locale: x, slug: '' }))}
    />
  </Wrapper>
);
