import { LicenseMetricsRepository, WorkflowRepository } from '@n8n/db';
import { Service } from '@n8n/di';

@Service()
export class LicenseMetricsService {
	constructor(
		private readonly licenseMetricsRepository: LicenseMetricsRepository,
		private readonly workflowRepository: WorkflowRepository,
	) {}

	async collectUsageMetrics() {
		// Disabled
		return [];
	}

	async collectPassthroughData() {
		// Disabled
		return { activeWorkflowIds: [] };
	}
}
