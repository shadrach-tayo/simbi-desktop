import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DesktopProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DesktopProvider {
  baseurl = `/api/v1`;
  // baseurl = `http://localhost:3000/api/v1`;
  constructor(public http: HttpClient) {
  }


  public checkIfTeacherHasubscribed() {
    return this.http.get(`${this.baseurl}/users/is_teacher_created`);
  }

  public createTeacher(data) {
    return this.http.post(`${this.baseurl}/users/create_teacher`, data);
  }

  public login(data) {
    return this.http.post(`${this.baseurl}/users/login`, data);
  }

  public createStudent(data) {
    return this.http.post(`${this.baseurl}/users/create_student`, data);
  }

  public fetchStudents(page) {
    return this.http.get(`${this.baseurl}/users/fetch_student?page=${page}`);
  }

  public bulkUploadStudent(file) {
    const form_data = new FormData;
    form_data.append('file', file);
    return this.http.post(`${this.baseurl}/users/bulk_upload_student`, form_data);
  }

  public fetchSubjects() {
    return this.http.get(`${this.baseurl}/app/fetch_subjects`);
  }

  public fetchTopics(id) {
    return this.http.get(`${this.baseurl}/app/fetch_topics/${id}`);
  }

  public fetchQuestionsForEvaluation(topic_id) {
    return this.http.get(`${this.baseurl}/app/fetch_questions/${topic_id}`);
  }

  public fetchQuestionsForTest(topic_id) {
    return this.http.get(`${this.baseurl}/app/fetch_questions/${topic_id}`);
  }

  public fetchSuperExam() {
    return this.http.get(`${this.baseurl}/app/fetch_super_exams`);
  }

  public postUtmeSchools() {
    return this.http.get(`${this.baseurl}/app/fetch_post_utme`);
  }

  public fetchQuestionForExam(subject_id, super_exam_id) {
    return this.http.get(`${this.baseurl}/app/fetch_questions_from_exam_list?subject_id=${subject_id}&super_exam_id=${super_exam_id}`);
  } 

  public fetchQuestionForExamCount(subject_id, super_exam_id) {
    return this.http.get(`${this.baseurl}/app/fetch_questions_from_exam_list_count?subject_id=${subject_id}&super_exam_id=${super_exam_id}`);
  } 

  public fetchTopicById(topic_id) {
    return this.http.get(`${this.baseurl}/app/fetch_topic_by_id/${topic_id}`);
  }

  public storeInitialEvaluation(body) {
    return this.http.post(`${this.baseurl}/app/store_evaluation_result/`, body);
  }

  public updateInitialEvaluation(body) {
    return this.http.post(`${this.baseurl}/app/update_evaluation_result`, body);
  }

  public storeInitialExaminationResult(body) {
    return this.http.post(`${this.baseurl}/app/store_examination_result`, body);
  }

  public updateExaminationResult(body) {
    return this.http.post(`${this.baseurl}/app/update_examination_result`, body);
  }

  public fetchExaminationAverage(user_id) {
    return this.http.get(`${this.baseurl}/app/user_examination_report_avg/${user_id}`);
  }

  public fetchEvaluationAverage(user_id) {
    return this.http.get(`${this.baseurl}/app/user_evaluation_report_avg/${user_id}`);
  }

  public fetchAllExamAttempt(user_id, exam_id) {
    return this.http.get(`${this.baseurl}/app/user_examination_all/${user_id}/${exam_id}`);
  }

  public fetchAllEvaluationAttempt(user_id, subject_id, topic_id) {
    return this.http.get(`${this.baseurl}/app/user_evaluation_all/${user_id}/${subject_id}/${topic_id}`);
  }

  public fetchEvaluationForChartScores(subject_id) {
    return this.http.get(`${this.baseurl}/app/evaluations_by_subject_for_line_chart/${subject_id}`);
  }

  public fetchEvaluationAgg(subject_id) {
    return this.http.get(`${this.baseurl}/app/evaluations_avg_score_on_subject/${subject_id}`);
  }
  
  public fetchExaminationForChartScores(exam_id) {
    return this.http.get(`${this.baseurl}/app/examinations_by_subject_for_line_chart/${exam_id}`);
  }

  public fetchExaminationAgg(exam_id) {
    return this.http.get(`${this.baseurl}/app/examination_avg_score_on_exams/${exam_id}`);
  }

  public setNovel(num) {
    return this.http.get(`${this.baseurl}/app/set_novel/${num}`);
  }

  public updateexamsettings(body) {
    return this.http.post(`${this.baseurl}/app/show_settings`, body);
  }
}