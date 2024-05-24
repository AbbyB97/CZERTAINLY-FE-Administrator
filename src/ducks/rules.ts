import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Resource } from 'types/openapi';
import {
    ConditionModel,
    ConditionRequestModel,
    ExecutionModel,
    ExecutionRequestModel,
    RuleDetailModel,
    RuleModel,
    RuleRequestModel,
    TriggerDetailModel,
    TriggerModel,
    TriggerRequestDto,
    UpdateConditionRequestModel,
    UpdateExecutionRequestModel,
    UpdateRuleRequestModel,
    UpdateTriggerRequestModel,
} from 'types/rules';
import { createFeatureSelector } from 'utils/ducks';

export type State = {
    rules: RuleModel[];
    ruleDetails?: RuleDetailModel;
    executions: ExecutionModel[];
    ExecutionDetails?: ExecutionModel;
    conditions: ConditionModel[];
    conditionDetails?: ConditionModel;
    triggers: TriggerModel[];
    triggerDetails?: TriggerDetailModel;

    isUpdatingExecution: boolean;
    isFetchingRulesList: boolean;
    isFetchingExecutions: boolean;
    isFetchingConditions: boolean;
    isFetchingTriggers: boolean;
    isFetchingRuleDetail: boolean;
    isFetchingExecutionDetails: boolean;
    isFetchingCondition: boolean;
    isFetchingTriggerDetail: boolean;
    isDeletingRule: boolean;
    isCreatingRule: boolean;
    isCreatingExecution: boolean;
    isDeletingExecution: boolean;
    isCreatingCondition: boolean;
    isDeletingCondition: boolean;
    isCreatingTrigger: boolean;
    isDeletingTrigger: boolean;
    isUpdatingCondition: boolean;
    isUpdatingRule: boolean;
    isUpdatingTrigger: boolean;
};

export const initialState: State = {
    rules: [],
    executions: [],
    conditions: [],
    triggers: [],
    isFetchingRulesList: false,
    isFetchingExecutions: false,
    isFetchingExecutionDetails: false,
    isFetchingCondition: false,
    isFetchingTriggerDetail: false,

    isFetchingConditions: false,
    isFetchingTriggers: false,
    isCreatingRule: false,
    isFetchingRuleDetail: false,

    isUpdatingExecution: false,
    isCreatingExecution: false,
    isDeletingExecution: false,
    isCreatingCondition: false,
    isDeletingCondition: false,
    isCreatingTrigger: false,
    isDeletingTrigger: false,
    isUpdatingCondition: false,
    isUpdatingRule: false,
    isUpdatingTrigger: false,
    isDeletingRule: false,
};

export const slice = createSlice({
    name: 'rules',

    initialState,

    reducers: {
        resetState: (state, action: PayloadAction<void>) => {
            Object.keys(state).forEach((key) => {
                if (!initialState.hasOwnProperty(key)) (state as any)[key] = undefined;
            });

            Object.keys(initialState).forEach((key) => ((state as any)[key] = (initialState as any)[key]));
        },

        listRules: (state, action: PayloadAction<{ resource?: Resource }>) => {
            state.isFetchingRulesList = true;
        },
        listRulesSuccess: (state, action: PayloadAction<{ rules: RuleModel[] }>) => {
            state.rules = action.payload.rules;
            state.isFetchingRulesList = false;
        },

        listRulesFailure: (state, action: PayloadAction<{ error: string | undefined }>) => {
            state.isFetchingRulesList = false;
        },

        listExecutions: (state, action: PayloadAction<{ resource?: Resource }>) => {
            state.isFetchingExecutions = true;
        },
        listExecutionsSuccess: (state, action: PayloadAction<{ executions: ExecutionModel[] }>) => {
            state.executions = action.payload.executions;
            state.isFetchingExecutions = false;
        },

        listExecutionsFailure: (state, action: PayloadAction<{ error: string | undefined }>) => {
            state.isFetchingExecutions = false;
        },

        listConditions: (state, action: PayloadAction<{ resource?: Resource }>) => {
            state.isFetchingConditions = true;
        },

        listConditionsSuccess: (state, action: PayloadAction<{ conditions: ConditionModel[] }>) => {
            state.conditions = action.payload.conditions;
            state.isFetchingConditions = false;
        },

        listConditionsFailure: (state, action: PayloadAction<{ error: string | undefined }>) => {
            state.isFetchingConditions = false;
        },

        listTriggers: (state, action: PayloadAction<{ resource?: Resource; eventResource?: Resource }>) => {
            state.isFetchingTriggers = true;
        },
        listTriggersSuccess: (state, action: PayloadAction<{ triggers: TriggerModel[] }>) => {
            state.triggers = action.payload.triggers;
            state.isFetchingTriggers = false;
        },

        listTriggersFailure: (state, action: PayloadAction<{ error: string | undefined }>) => {
            state.isFetchingTriggers = false;
        },

        createExecution: (state, action: PayloadAction<{ executionRequestModel: ExecutionRequestModel }>) => {
            state.isCreatingExecution = true;
        },
        createExecutionSuccess: (state, action: PayloadAction<{ execution: ExecutionModel }>) => {
            state.executions.push(action.payload.execution);
            state.isCreatingExecution = false;
        },

        createExecutionFailure: (state, action: PayloadAction<{ error: string | undefined }>) => {
            state.isCreatingExecution = false;
        },

        createCondition: (state, action: PayloadAction<{ conditionRequestModel: ConditionRequestModel }>) => {
            state.isCreatingCondition = true;
        },

        createConditionSuccess: (state, action: PayloadAction<{ condition: ConditionModel }>) => {
            state.conditions.push(action.payload.condition);
            state.isCreatingCondition = false;
        },

        createConditionFailure: (state, action: PayloadAction<{ error: string | undefined }>) => {
            state.isCreatingCondition = false;
        },

        createRule: (state, action: PayloadAction<{ rule: RuleRequestModel }>) => {
            state.isCreatingRule = true;
        },
        createRuleSuccess: (state, action: PayloadAction<{ rule: RuleModel }>) => {
            state.rules.push(action.payload.rule);
            state.isCreatingRule = false;
        },

        createRuleFailure: (state, action: PayloadAction<{ error: string | undefined }>) => {
            state.isCreatingRule = false;
        },

        createTrigger: (state, action: PayloadAction<{ trigger: TriggerRequestDto }>) => {
            state.isCreatingTrigger = true;
        },

        createTriggerSuccess: (state, action: PayloadAction<{ trigger: TriggerDetailModel }>) => {
            state.isCreatingTrigger = false;
        },

        createTriggerFailure: (state, action: PayloadAction<{ error: string | undefined }>) => {
            state.isCreatingTrigger = false;
        },

        deleteExecution: (state, action: PayloadAction<{ executionUuid: string }>) => {
            state.isDeletingExecution = true;
        },

        deleteExecutionSuccess: (state, action: PayloadAction<{ executionUuid: string }>) => {
            state.executions = state.executions.filter((group) => group.uuid !== action.payload.executionUuid);
            state.isDeletingExecution = false;
        },

        deleteExecutionFailure: (state, action: PayloadAction<{ error: string | undefined }>) => {
            state.isDeletingExecution = false;
        },

        deleteCondition: (state, action: PayloadAction<{ conditionUuid: string }>) => {
            state.isDeletingCondition = true;
        },
        deleteConditionSuccess: (state, action: PayloadAction<{ conditionUuid: string }>) => {
            state.conditions = state.conditions.filter((group) => group.uuid !== action.payload.conditionUuid);
            state.isDeletingCondition = false;
        },
        deleteConditionFailure: (state, action: PayloadAction<{ error: string | undefined }>) => {
            state.isDeletingCondition = false;
        },

        deleteRule: (state, action: PayloadAction<{ ruleUuid: string }>) => {
            state.isDeletingRule = true;
        },
        deleteRuleSuccess: (state, action: PayloadAction<{ ruleUuid: string }>) => {
            state.rules = state.rules.filter((rule) => rule.uuid !== action.payload.ruleUuid);
            state.isDeletingRule = false;
        },
        deleteRuleFailure: (state, action: PayloadAction<{ error: string | undefined }>) => {
            state.isDeletingRule = false;
        },

        deleteTrigger: (state, action: PayloadAction<{ triggerUuid: string }>) => {
            state.isDeletingTrigger = true;
        },
        deleteTriggerSuccess: (state, action: PayloadAction<{ triggerUuid: string }>) => {
            state.triggers = state.triggers.filter((trigger) => trigger.uuid !== action.payload.triggerUuid);
            state.isDeletingTrigger = false;
        },

        deleteTriggerFailure: (state, action: PayloadAction<{ error: string | undefined }>) => {
            state.isDeletingTrigger = false;
        },

        getExecution: (state, action: PayloadAction<{ executionUuid: string }>) => {
            state.isFetchingExecutionDetails = true;
        },
        getExecutionSuccess: (state, action: PayloadAction<{ execution: ExecutionModel }>) => {
            state.ExecutionDetails = action.payload.execution;
            state.isFetchingExecutionDetails = false;
        },
        getExecutionFailure: (state, action: PayloadAction<{ error: string | undefined }>) => {
            state.isFetchingExecutionDetails = false;
        },

        getCondition: (state, action: PayloadAction<{ conditionUuid: string }>) => {
            state.isFetchingCondition = true;
        },
        getConditionSuccess: (state, action: PayloadAction<{ condition: ConditionModel }>) => {
            state.conditionDetails = action.payload.condition;
            state.isFetchingCondition = false;
        },
        getConditionFailure: (state, action: PayloadAction<{ error: string | undefined }>) => {
            state.isFetchingCondition = false;
        },
        getRule: (state, action: PayloadAction<{ ruleUuid: string }>) => {
            state.isFetchingRuleDetail = true;
        },
        getRuleSuccess: (state, action: PayloadAction<{ rule: RuleDetailModel }>) => {
            state.ruleDetails = action.payload.rule;
            state.isFetchingRuleDetail = false;
        },
        getRuleFailure: (state, action: PayloadAction<{ error: string | undefined }>) => {
            state.isFetchingRuleDetail = false;
        },

        getTrigger: (state, action: PayloadAction<{ triggerUuid: string }>) => {
            state.isFetchingTriggerDetail = true;
        },
        getTriggerSuccess: (state, action: PayloadAction<{ trigger: TriggerDetailModel }>) => {
            state.triggerDetails = action.payload.trigger;
            state.isFetchingTriggerDetail = false;
        },
        getTriggerFailure: (state, action: PayloadAction<{ error: string | undefined }>) => {
            state.isFetchingTriggerDetail = false;
        },

        updateExecution: (state, action: PayloadAction<{ executionUuid: string; execution: UpdateExecutionRequestModel }>) => {
            state.isUpdatingExecution = true;
        },

        updateExecutionSuccess: (state, action: PayloadAction<{ execution: ExecutionModel }>) => {
            state.executions = state.executions.map((group) =>
                group.uuid === action.payload.execution.uuid ? action.payload.execution : group,
            );

            if (state.ExecutionDetails?.uuid === action.payload.execution.uuid) {
                state.ExecutionDetails = action.payload.execution;
            }

            state.isUpdatingExecution = false;
        },

        updateExecutionFailure: (state, action: PayloadAction<{ error: string | undefined }>) => {
            state.isUpdatingExecution = false;
        },

        updateCondition: (state, action: PayloadAction<{ conditionUuid: string; condition: UpdateConditionRequestModel }>) => {
            state.isUpdatingCondition = true;
        },

        updateConditionSuccess: (state, action: PayloadAction<{ condition: ConditionModel }>) => {
            state.conditions = state.conditions.map((group) =>
                group.uuid === action.payload.condition.uuid ? action.payload.condition : group,
            );

            if (state.conditionDetails?.uuid === action.payload.condition.uuid) {
                state.conditionDetails = action.payload.condition;
            }

            state.isUpdatingCondition = false;
        },

        updateConditionFailure: (state, action: PayloadAction<{ error: string | undefined }>) => {
            state.isUpdatingCondition = false;
        },

        updateRule: (state, action: PayloadAction<{ ruleUuid: string; rule: UpdateRuleRequestModel }>) => {
            state.isUpdatingRule = true;
        },
        updateRuleSuccess: (state, action: PayloadAction<{ rule: RuleDetailModel }>) => {
            state.rules = state.rules.map((rule) => (rule.uuid === action.payload.rule.uuid ? action.payload.rule : rule));
            state.isUpdatingRule = false;

            if (state.ruleDetails?.uuid === action.payload.rule.uuid) {
                state.ruleDetails = action.payload.rule;
            }
        },
        updateRuleFailure: (state, action: PayloadAction<{ error: string | undefined }>) => {
            state.isUpdatingRule = false;
        },

        updateTrigger: (state, action: PayloadAction<{ triggerUuid: string; trigger: UpdateTriggerRequestModel }>) => {
            state.isUpdatingTrigger = true;
        },

        updateTriggerSuccess: (state, action: PayloadAction<{ trigger: TriggerDetailModel }>) => {
            if (state.triggerDetails?.uuid === action.payload.trigger.uuid) {
                state.triggerDetails = action.payload.trigger;
            }

            state.isUpdatingTrigger = false;
        },

        updateTriggerFailure: (state, action: PayloadAction<{ error: string | undefined }>) => {
            state.isUpdatingTrigger = false;
        },
    },
});

const state = createFeatureSelector<State>(slice.name);

const rules = createSelector(state, (state) => state.rules);
const conditionDetails = createSelector(state, (state) => state.conditionDetails);
const ruleDetails = createSelector(state, (state) => state.ruleDetails);
const triggerDetails = createSelector(state, (state) => state.triggerDetails);
const triggers = createSelector(state, (state) => state.triggers);

const executions = createSelector(state, (state) => state.executions);
const ExecutionDetails = createSelector(state, (state) => state.ExecutionDetails);

const isCreatingCondition = createSelector(state, (state) => state.isCreatingCondition);
const isUpdatingCondition = createSelector(state, (state) => state.isUpdatingCondition);

const isCreatingRule = createSelector(state, (state) => state.isCreatingRule);
const isUpdatingRule = createSelector(state, (state) => state.isUpdatingRule);
const isDeletingRule = createSelector(state, (state) => state.isDeletingRule);
const isFetchingRulesList = createSelector(state, (state) => state.isFetchingRulesList);
const conditions = createSelector(state, (state) => state.conditions);
const isFetchingConditions = createSelector(state, (state) => state.isFetchingConditions);
const isDeletingCondition = createSelector(state, (state) => state.isDeletingCondition);
const isFetchingCondition = createSelector(state, (state) => state.isFetchingCondition);
const isFetchingRuleDetail = createSelector(state, (state) => state.isFetchingRuleDetail);
const isCreatingExecution = createSelector(state, (state) => state.isCreatingExecution);
const isFetchingExecutions = createSelector(state, (state) => state.isFetchingExecutions);
const isDeletingExecution = createSelector(state, (state) => state.isDeletingExecution);
const isFetchingExecutionDetails = createSelector(state, (state) => state.isFetchingExecutionDetails);
const isUpdatingExecution = createSelector(state, (state) => state.isUpdatingExecution);
const isUpdatingTrigger = createSelector(state, (state) => state.isUpdatingTrigger);
const isFetchingTriggerDetail = createSelector(state, (state) => state.isFetchingTriggerDetail);
const isDeletingTrigger = createSelector(state, (state) => state.isDeletingTrigger);
const isFetchingTriggers = createSelector(state, (state) => state.isFetchingTriggers);
const isCreatingTrigger = createSelector(state, (state) => state.isCreatingTrigger);

export const selectors = {
    rules,
    triggers,
    triggerDetails,
    conditions,
    conditionDetails,
    executions,
    ExecutionDetails,
    ruleDetails,
    isDeletingRule,
    isFetchingConditions,
    isDeletingCondition,
    isFetchingRulesList,
    isCreatingCondition,
    isCreatingRule,
    isUpdatingCondition,
    isFetchingCondition,
    isUpdatingRule,
    isFetchingRuleDetail,
    isCreatingExecution,
    isFetchingExecutions,
    isDeletingExecution,
    isFetchingExecutionDetails,
    isUpdatingExecution,
    isUpdatingTrigger,
    isFetchingTriggerDetail,
    isDeletingTrigger,
    isFetchingTriggers,
    isCreatingTrigger,
};

export const actions = slice.actions;

export default slice.reducer;
