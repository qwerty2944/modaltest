import domtoimage from 'dom-to-image';

/**
 * HTMLDivElement 참조 배열로부터 PDF를 생성하고 지정된 파일 이름으로 저장합니다.
 * 비동기 작업을 사용하면서도 페이지 순서를 유지합니다.
 *
 * @param pages - PDF에 포함될 HTMLDivElement를 가리키는 React 참조 배열입니다.
 * @param fileName - 저장될 PDF 파일의 원하는 이름입니다.
 *
 * @example
 * ```tsx
 * const pageRefs = [page1Ref, page2Ref];
 * savePDF(pageRefs, 'document.pdf');
 * ```
 */
export const savePDF = async (
  pages: React.RefObject<HTMLDivElement>[],
  fileName: string
) => {
  const { default: jsPDF } = await import('jspdf');
  const pdf = new jsPDF('p', 'mm', 'a4');

  await pages.reduce(async (previousPromise, pageRef, i) => {
    // 이전 페이지 처리가 완료될 때까지 대기합니다.
    await previousPromise;

    const content = pageRef.current;
    if (content) {
      // 현재 페이지의 내용을 이미지 데이터로 변환합니다.
      const imgData = await domtoimage.toPng(content, {
        quality: 2,
      });

      const imgWidth = 210; // A4 너비 (mm)
      const imgHeight =
        (pdf.internal.pageSize.getHeight() * imgWidth) /
        pdf.internal.pageSize.getWidth();

      // 첫 페이지가 아니면 새 페이지를 추가합니다.
      if (i !== 0) {
        pdf.addPage();
      }

      // 이미지 데이터를 PDF에 추가합니다.
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    }
  }, Promise.resolve()); // 초기값을 Promise.resolve()로 설정하여 첫 번째 호출이 대기하지 않도록 합니다.

  // PDF 파일을 저장합니다.
  pdf.save(fileName);
};

/**
 * HTMLDivElement 참조 배열로부터 PDF를 생성하고 지정된 파일 이름으로 저장합니다.
 * 비동기 작업을 사용하면서도 페이지 순서를 유지합니다.
 *
 * @param pages - PDF에 포함될 HTMLDivElement를 가리키는 React 참조 배열입니다.
 * @param fileName - 저장될 PDF 파일의 원하는 이름입니다.
 *
 * @example
 * ```tsx
 * const pageRefs = [page1Ref, page2Ref];
 * savePDF(pageRefs, 'document.pdf');
 * ```
 */
export const savePDFtwo = async (
  pages: React.RefObject<HTMLDivElement>[],
  fileName: string
) => {
  const { default: jsPDF } = await import('jspdf');
  const pdf = new jsPDF('p', 'mm', 'a4');

  const a4Width = 210; // A4 너비 (mm)
  const a4Height = 297; // A4 높이 (mm)

  await pages.reduce(async (previousPromise, pageRef, i) => {
    // 이전 페이지 처리가 완료될 때까지 대기합니다.
    await previousPromise;

    const content = pageRef.current;
    if (content) {
      // 현재 페이지의 내용을 이미지 데이터로 변환합니다.
      const imgData = await domtoimage.toPng(content, {
        quality: 2,
      });

      // 이미지의 실제 크기를 가져옵니다.
      const img = new Image();
      img.src = imgData;
      await new Promise((resolve) => {
        img.onload = resolve;
      });

      const imgWidth = img.width;
      const imgHeight = img.height;

      // 비율을 유지하면서 A4 크기에 맞추기 위해 이미지 크기를 조정합니다.
      const ratio = Math.min(a4Width / imgWidth, a4Height / imgHeight);
      const scaledWidth = imgWidth * ratio;
      const scaledHeight = imgHeight * ratio;

      // 첫 페이지가 아니면 새 페이지를 추가합니다.
      if (i !== 0) {
        pdf.addPage();
      }

      // 이미지 데이터를 PDF에 추가합니다.
      pdf.addImage(imgData, 'PNG', 0, 0, scaledWidth, scaledHeight);
    }
  }, Promise.resolve()); // 초기값을 Promise.resolve()로 설정하여 첫 번째 호출이 대기하지 않도록 합니다.

  // PDF 파일을 저장합니다.
  pdf.save(fileName);
};
