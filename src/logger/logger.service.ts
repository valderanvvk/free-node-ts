import { Logger } from 'tslog';
import { ILogger } from './logger.interface';

export class LoggerService implements ILogger {
	public logger: Logger;
	public showLog = true;
	public showWarn = true;
	public showError = true;

	constructor() {
		this.logger = new Logger({
			displayInstanceName: false,
			displayLoggerName: false,
			displayFilePath: 'hidden',
			displayFunctionName: false,
		});
	}

	log(...args: unknown[]): void {
		if (this.showLog) this.logger.info(...args);
	}

	error(...args: unknown[]): void {
		if (this.showError) this.logger.error(...args);
	}

	warn(...args: unknown[]): void {
		if (this.showWarn) this.logger.warn(...args);
	}

	show(status: boolean): void {
		this.showLog = status;
		this.showError = status;
		this.showWarn = status;
	}
}
