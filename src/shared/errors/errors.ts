export class CustomError extends Error {
  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
  }
}

export class PercentageAndPixelsUsedTogetherError extends CustomError {
  constructor() {
    super('percentage와 pixels는 동시에 사용할 수 없습니다.');
  }
}
