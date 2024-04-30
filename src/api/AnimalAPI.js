import animalDetail from "../pages/AnimalDetail";

const API_KEY = 'e9f25924906445aabfe62f422043968e';

/*일별 유기견 정보 조회*/
export async function getAnimalList() {
    const url = `https://openapi.gg.go.kr/AbdmAnimalProtect?key=${API_KEY}&kind=고양이`;

    try {
        const response = await fetch(url);
        const xmlData = await response.text(); // XML 형식의 데이터를 텍스트로 변환
        const animals = parseXmlData(xmlData); // XML 데이터를 파싱하여 객체 배열로 반환
        return animals; // 객체 배열 반환
    } catch (error) {
        console.error('API 호출 중 에러가 발생했습니다:', error.message);
        return null;
    }
}


/* 유기견 상세 정보 조회 */

export async function getAnimalDetail(ABDM_IDNTFY_NO) {
    const url = `https://openapi.gg.go.kr/AbdmAnimalProtect?key=${API_KEY}&SIGUN_CD=${ABDM_IDNTFY_NO}`;

    try {
        const response = await fetch(url);
        const xmlData = await response.text(); // XML 형식의 데이터를 텍스트로 변환
        const animalDetail = parseXmlData1(xmlData); // XML 데이터를 파싱하여 필요한 정보를 추출
        return animalDetail; // 파싱된 데이터 반환
    } catch (error) {
        console.error('API 호출 중 에러가 발생했습니다:', error.message);
        return null;
    }
}


function parseXmlData1(xmlString) {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, "text/xml");

    // 필요한 정보를 파싱하여 추출하는 코드를 작성하세요.
    // 예를 들어, xmlDoc에서 원하는 요소를 선택하고 그 값을 추출할 수 있습니다.

    // 예시: 유기견 상세 정보 파싱
    const animalDetail = {
        SHTER_NM: xmlDoc.querySelector("SHTER_NM").textContent,
        PBLANC_BEGIN_DE: xmlDoc.querySelector("PBLANC_BEGIN_DE").textContent,
        SPECIES_NM: xmlDoc.querySelector("SPECIES_NM").textContent
        // 추가적인 정보를 추출할 수 있습니다.
    };

    return animalDetail;
}




function parseXmlData(xmlString) {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, "text/xml");

    const animalElements = xmlDoc.getElementsByTagName("row");
    const animals = [];

    for (let i = 0; i < animalElements.length; i++) {
        const animalElement = animalElements[i];
        const animal = {
            PBLANC_IDNTFY_NO: animalElement.querySelector("PBLANC_IDNTFY_NO").textContent,
            ABDM_IDNTFY_NO: animalElement.querySelector("ABDM_IDNTFY_NO").textContent,
            PBLANC_BEGIN_DE: animalElement.querySelector("PBLANC_BEGIN_DE").textContent,
            SPECIES_NM: animalElement.querySelector("SPECIES_NM").textContent,
            AGE_INFO: animalElement.querySelector("AGE_INFO").textContent,
            SHTER_NM: animalElement.querySelector("SHTER_NM").textContent
        };
        animals.push(animal);
    }

    return animals;
}