import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { ReadStream } from 'fs';

import { validateFileFormat, validateFileSize } from 'src/utils';

@Injectable()
export class FileValidationPipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata) {
    if (!value.filename) throw new Error("File not provided");

    const { filename, mimetype, createReadStream } = value;
    const fileStream = createReadStream() as ReadStream;


    const isFileFormatValid = validateFileFormat(filename, ["png", "jpg"]);

    if (!isFileFormatValid) throw new Error("File format not valid");

    const isFileSizeValid = await validateFileSize(fileStream, 1e+7);

    if (!isFileSizeValid) throw new Error("File size not valid");

    return value;

  }
}
