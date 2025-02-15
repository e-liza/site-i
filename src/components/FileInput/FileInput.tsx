import React, { ChangeEvent } from 'react';
import classNames from 'classnames';

import styles from './FileInput.module.scss';

interface IFileInputProps {
  labelName: string;
  id: string;
  className?: string;
  acceptFileTypes?: string;
  value?: File;
  onChange?(value: File): void;
}

class FileInput extends React.Component<IFileInputProps> {
  private fileInput: HTMLInputElement | null;

  constructor(props: IFileInputProps) {
    super(props);
    this.fileInput = null;
  }
  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (this.props.onChange && event.target.files && event.target.files[0])
      this.props.onChange(event.target.files[0]);
  };

  componentDidUpdate() {
    if (!this.props.value && this.fileInput) this.fileInput.value = '';
  }

  render() {
    return (
      <div className={styles.buttonContainer}>
        <input
          ref={(ref) => (this.fileInput = ref)}
          id={this.props.id}
          accept={this.props.acceptFileTypes}
          type="file"
          onChange={this.handleChange}
          className={styles.input}
          disabled={this.props.value && this.props.value.name.length > 0}
        />
        <label
          className={classNames(styles.buttonLabel, this.props.className, {
            [styles.disabled]: this.props.value?.name,
          })}
          htmlFor={this.props.id}
        >
          {this.props.labelName}
        </label>
      </div>
    );
  }
}

export default FileInput;
